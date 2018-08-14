/*eslint-disable */

require('waypoints/lib/noframework.waypoints.min.js');

const PARAM = {
  SHORT_TIMEOUT: 100,
  LONG_TIMEOUT: 1000,
  MOBILE_OFFSET: '400',
  DESKTOP_OFFSET: '500',
};

function delay(timeout) {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

async function fillIcons(item) {
  await delay(PARAM.SHORT_TIMEOUT);
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

async function initWayPoint(offsetTop) {
  let i = 0;
  for (const item of goalItems) {
    await delay(PARAM.LONG_TIMEOUT);
    const itemClass = `.goals__item--${i++}`;
    if (item.matches(itemClass)) {
      new Waypoint({
        element: document.querySelector(itemClass),
        handler() {
          generateRectArr(itemClass);
          if (offsetTop >= PARAM.DESKTOP_OFFSET) {}
        },
        offset: offsetTop,
      });
    }
  }
}

function mediaListener(screenSize) {
  if (screenSize.matches) {
    initWayPoint(PARAM.MOBILE_OFFSET);
  } else {
    initWayPoint(PARAM.DESKTOP_OFFSET);
  }
}

function init() {
  const breakpoint = window.matchMedia('(max-width: 1169px)');
  mediaListener(breakpoint);
  breakpoint.addListener(mediaListener);
}


export default init;
