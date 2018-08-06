const video = document.querySelector('.header__video');
const btnList = document.querySelectorAll('.header__btn');
const controlContainer = document.querySelector('.header__play');
const btnPause = controlContainer.querySelector('.header__onpause');
let isPaused = false;

function activateVideo() {
  if (video.paused) {
    video.play();
    video.classList.add('header__video--active');
    controlContainer.classList.add('header__play--active');
    btnPause.style.fill = '';
    isPaused = false;
  }
}

function pauseVideo() {
  video.pause();
  btnPause.style.fill = 'rgb(255, 213, 0)';
  isPaused = true;
}

function disableVideo() {
  video.pause();
  video.classList.remove('header__video--active');
  controlContainer.classList.remove('header__play--active');
  if (!isPaused) {
    video.currentTime = 0;
  }
}

function init() {
  btnList.forEach((btn) => {
    btn.addEventListener('click', (evt) => {
      if (evt.currentTarget.matches('.header__onplay')) {
        activateVideo();
      } else if (evt.currentTarget.matches('.header__onpause')) {
        pauseVideo();
      } else if (evt.currentTarget.matches('.header__close')) {
        disableVideo();
      }
    });
  });
}

export default init;
