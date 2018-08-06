import SmoothScroll from 'smooth-scroll';
import initCarousel from './carousel';
import fillIcons from './svg-fill';
import playVideo from './video';

const navLinks = document.querySelectorAll('.smooth-toggler');
const nav = document.querySelector('.navigation__panel');
const navList = document.querySelector('.navigation__list');
const navHamburger = document.querySelector('.navigation__hamburger');
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

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const selector = link.getAttribute('href');
    const content = document.querySelector(selector);
    addScroll(content, link);
  });
});

function fixNav() {
  if (window.scrollY >= 5) {
    nav.classList.add('navigation__panel--show');
    navHamburger.classList.add('navigation__hamburger--black');
  } else {
    nav.classList.remove('navigation__panel--show');
    navHamburger.classList.remove('navigation__hamburger--black');
  }
}

function showNav(evt) {
  evt.preventDefault();
  evt.currentTarget.classList.toggle('navigation__hamburger--active');
  navList.classList.toggle('navigation__list--active');
}

window.addEventListener('scroll', fixNav);

navHamburger.addEventListener('click', (evt) => {
  showNav(evt);
});

initCarousel();
fillIcons();
playVideo();
