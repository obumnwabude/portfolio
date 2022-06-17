const contactForm = document.querySelector('form[contact]');
const menuIcon = document.querySelector('[menu-icon]');
const nav = document.querySelector('nav');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const body = Object.fromEntries(new FormData(contactForm));
  console.log(body);
  contactForm.reset();
  alert('Submitted, Thanks!');
});

menuIcon.addEventListener('click', () => nav.classList.toggle('toggled'));

document
  .querySelectorAll('nav ul a')
  .forEach((a) =>
    a.addEventListener('click', () => nav.classList.remove('toggled'))
  );

const isHeroInView = () => {
  const hero = document.querySelector('[hero]').getBoundingClientRect();
  return (
    hero.bottom > 0 &&
    hero.right > 0 &&
    hero.left < (window.innerWidth || document.documentElement.clientWidth) &&
    hero.top < (window.innerHeight || document.documentElement.clientHeight)
  );
};

window.onscroll = () => {
  if (isHeroInView()) {
    nav.classList.remove('scrolled');
  } else {
    nav.classList.add('scrolled');
  }
};
