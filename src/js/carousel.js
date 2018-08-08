import Swiper from 'swiper';

function init() {
  const title = document.querySelector('.title--thin span');
  const swiper = new Swiper('.swiper-container', {
    slideToClickedSlide: 'true',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    // slidesPerView: 1,
    // spaceBetween: 30,
    // freeMode: true,
    // pagination: {
    //   clickable: true,
    // },
  });

  swiper.slideTo(2, 1000, false);

  swiper.on('setTransition', () => {
    const slide = document.querySelector('.swiper-slide-active');
    const date = slide.querySelector('.swiper-date').innerHTML;
    title.innerHTML = date;
  });
}

export default init;
