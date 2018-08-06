require('waypoints/lib/noframework.waypoints.min.js');

const Param = {
  TIMEOUT: 100,
  MOBILE_OFFSET: '400',
  DESKTOP_OFFSET: '500',
};

function delay() {
  return new Promise(resolve => setTimeout(resolve, Param.TIMEOUT));
}

async function fillIcons(item) {
  await delay();
  item.style.fill = 'rgb(255, 214, 44)';
}

async function processArray(array) {
  for (const rect of array) {
    await fillIcons(rect);
  }
}

function generateRectArr(itemClass) {
  const svgImage = document.querySelector(`${itemClass} svg`);
  const children = Array.from(svgImage.children);
  const rectArr = children.filter(child => child.nodeName === 'rect').reverse();
  processArray(rectArr);
}

const goalItems = document.querySelectorAll('.goals__item');

function initWayPoint(offsetTop) {
  goalItems.forEach((item, index) => {
    const itemClass = `.goals__item--${index}`;
    if (item.matches(itemClass)) {
      const waypoint = new Waypoint({
        element: document.querySelector(itemClass),
        handler() {
          generateRectArr(itemClass);
        },
        offset: offsetTop,
      });
    }
  });
}

function mediaListener(screenSize) {
  if (screenSize.matches) {
    initWayPoint(Param.MOBILE_OFFSET);
  } else {
    initWayPoint(Param.DESKTOP_OFFSET);
  }
}

function init() {
  const breakpoint = window.matchMedia('(max-width: 1169px)');
  mediaListener(breakpoint);
  breakpoint.addListener(mediaListener);
}


export default init;
