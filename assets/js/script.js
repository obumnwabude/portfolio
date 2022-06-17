const contactForm = document.querySelector('form[contact]');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const body = Object.fromEntries(new FormData(contactForm));
  console.log(body);
  contactForm.reset();
  alert('Submitted, Thanks!');
});
