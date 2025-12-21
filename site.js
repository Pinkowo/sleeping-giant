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
