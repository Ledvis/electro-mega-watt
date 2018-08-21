import SmoothScroll from 'smooth-scroll';
import initCarousel from './carousel';
import fillIcons from './svg-fill';
import playVideo from './video';

const navLinks = document.querySelectorAll('.smooth-toggler');
const nav = document.querySelector('.navigation');
const navLogo = nav.querySelector('img');
const navHamburger = nav.querySelector('.navigation__hamburger');
const scroll = new SmoothScroll();

function addScroll(content, toggler, options = {
  speed: 1000,
  easing: 'easeOutCubic',
}) {
  scroll.animateScroll(
    content,
    toggler,
    options,
  );
}

function fixNav() {
  if (window.scrollY >= 5) {
    nav.classList.add('navigation--show');
    navHamburger.classList.add('navigation__hamburger--black');
    navLogo.src = 'img/logo-black.svg';
  } else {
    nav.classList.remove('navigation--show');
    navHamburger.classList.remove('navigation__hamburger--black');
    navLogo.src = 'img/logo-white.svg';
  }
}

function onLinkClick(link) {
  const selector = link.getAttribute('href');
  const content = document.querySelector(selector);
  addScroll(content, link);
  nav.classList.remove('navigation--active');
}

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    onLinkClick(link);
  });
});

function showNav() {
  nav.classList.toggle('navigation--active');
}

window.addEventListener('scroll', fixNav);

navHamburger.addEventListener('click', () => {
  showNav();
});

initCarousel();
fillIcons();
playVideo();
