// Toggle mobile menu
const toggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    e.preventDefault();
  }
});

