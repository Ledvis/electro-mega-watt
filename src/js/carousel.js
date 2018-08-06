import Swiper from 'swiper';

function init() {
  const title = document.querySelector('.title--thin span');
  const swiper = new Swiper('.swiper-container', {
    // slidesPerView: 1,
    // spaceBetween: 40,
    // width: 200,
    // centeredSlides: true,
    // slidesOffsetBefore: 60,
    slideToClickedSlide: 'true',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  });

  swiper.slideTo(2, 1000, false);

  swiper.on('setTransition', () => {
    const slide = document.querySelector('.swiper-slide-active');
    const date = slide.querySelector('.swiper-date').innerHTML;
    title.innerHTML = date;
  });
}

export default init;
