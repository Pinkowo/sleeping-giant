document.documentElement.classList.add('js');

const revealItems = document.querySelectorAll('.reveal, .stagger');

if (revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('is-visible');

        if (entry.target.classList.contains('stagger')) {
          Array.from(entry.target.children).forEach((child, index) => {
            child.style.setProperty('--delay', `${index * 90}ms`);
          });
        }

        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
}

const galleryImages = Array.from(document.querySelectorAll('.page-gallery .card img'));
const lightbox = document.querySelector('.lightbox');

if (galleryImages.length && lightbox) {
  const lightboxImage = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = lightbox.querySelector('.lightbox-caption');
  const lightboxClose = lightbox.querySelector('.lightbox-close');
  const lightboxPrev = lightbox.querySelector('.lightbox-prev');
  const lightboxNext = lightbox.querySelector('.lightbox-next');
  let currentIndex = 0;
  let lastFocused = null;

  const getCaption = (img) => {
    const cardText = img.closest('.card')?.querySelector('.card-body p')?.textContent?.trim();
    return cardText || img.alt || 'Gallery image';
  };

  const showImage = (index) => {
    currentIndex = (index + galleryImages.length) % galleryImages.length;
    const img = galleryImages[currentIndex];
    const caption = getCaption(img);
    lightboxImage.src = img.src;
    lightboxImage.alt = caption;
    lightboxCaption.textContent = caption;
  };

  const openLightbox = (index) => {
    lastFocused = document.activeElement;
    showImage(index);
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    lightboxClose.focus();
  };

  const closeLightbox = () => {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocused) {
      lastFocused.focus();
    }
  };

  galleryImages.forEach((img, index) => {
    img.setAttribute('role', 'button');
    img.setAttribute('tabindex', '0');
    img.addEventListener('click', () => openLightbox(index));
    img.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openLightbox(index);
      }
    });
  });

  lightboxClose.addEventListener('click', closeLightbox);
  lightboxPrev.addEventListener('click', () => showImage(currentIndex - 1));
  lightboxNext.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('is-open')) {
      return;
    }

    if (event.key === 'Escape') {
      closeLightbox();
    } else if (event.key === 'ArrowRight') {
      showImage(currentIndex + 1);
    } else if (event.key === 'ArrowLeft') {
      showImage(currentIndex - 1);
    }
  });
}
