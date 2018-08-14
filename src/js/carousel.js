export default function init() {
  const audioRoadmap = document.querySelector('#audio-roadmap');
  const swiperRoadmap = new Swiper('.roadmap-slider-container', {
    slidesPerView: 'auto',
    spaceBetween: 0,
    centeredSlides: true,
    slideToClickedSlide: 'true',
    grabCursor: true,
    onSlideChangeStart() {
      audioRoadmap.muted = false;
      audioRoadmap.play();
    },
  });

  swiperRoadmap.slideTo(2, 0, false);

  swiperRoadmap.on('setTranslate', () => {
    const swiperSubtitles = document.querySelectorAll('.swiper-slide h4');
    swiperSubtitles.forEach((el) => {
      if (el.parentNode.classList.contains('swiper-slide-active')) {
        const titleRoadmap = document.querySelector('h3.roadmap__title span');
        titleRoadmap.innerText = el.textContent;
      }
    });
  });
}
