  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  document.querySelector('.btn-send').addEventListener('click', function() {
    this.textContent = 'Message sent ✓';
    this.style.background = '#1B8A4C';
    setTimeout(() => { this.textContent = 'Send message →'; this.style.background = ''; }, 3000);
  });
