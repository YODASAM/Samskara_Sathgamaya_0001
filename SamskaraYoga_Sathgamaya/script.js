document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-button');
const mobileNav = document.querySelector('#mobile-nav');

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    mobileNav.hidden = open;
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menuButton.setAttribute('aria-expanded', 'false');
      mobileNav.hidden = true;
    });
  });
}

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll('.reveal').forEach(el => {
  if (observer) observer.observe(el);
  else el.classList.add('visible');
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// EDIT THIS before publishing.
const REGISTRATION_EMAIL = 'YOUR_EMAIL_HERE';
const form = document.querySelector('#registration-form');
const status = document.querySelector('#form-status');

if (form && status) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name || !email) {
      status.textContent = 'Please add your name and email.';
      return;
    }

    if (REGISTRATION_EMAIL === 'YOUR_EMAIL_HERE') {
      status.textContent = 'Form is ready. Replace YOUR_EMAIL_HERE in script.js with your email address before publishing.';
      return;
    }

    const subject = encodeURIComponent(`Samskara Yoga enquiry — ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nPhone: ${phone || 'Not provided'}\n\nMessage:\n${message || 'I would like details about the next Samskara Yoga session.'}`);
    window.location.href = `mailto:${REGISTRATION_EMAIL}?subject=${subject}&body=${body}`;
    status.textContent = 'Opening your email app…';
  });
}
