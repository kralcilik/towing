const burgerMenuBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMobileMenuBtn = document.getElementById('close-mobile-btn');
const linkJumper1 = document.getElementById('hero-link-jumper');
const linkJumper2 = document.getElementById('services-link-jumper');
const linkJumper3 = document.getElementById('gallery-link-jumper');
const linkJumper4 = document.getElementById('contact-link-jumper');
const heroBtn = document.getElementById('hero-button');
const heroBtnMobile = document.getElementById('hero-button-mobile');
const nameInput = document.getElementById('name');

burgerMenuBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(-100vw)';
});
closeMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(100vw)';
});
linkJumper1.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(100vw)';
});
linkJumper2.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(100vw)';
});
linkJumper3.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(100vw)';
});
linkJumper4.addEventListener('click', () => {
  mobileMenu.style.transform = 'translateX(100vw)';
});
heroBtn.addEventListener('click', () => {
  nameInput.focus();
});
heroBtnMobile.addEventListener('click', () => {
  nameInput.focus();
});
