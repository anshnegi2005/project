function scrollToSection(id) {
  const el = document.getElementById(id);
  if(el) el.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thanks for contacting DesignCraft! We’ll reply soon.');
    form.reset();
  });
});
