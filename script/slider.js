const picFrame = document.querySelector('.gallery');
const pics = picFrame.querySelectorAll('img');
const backdrop = document.querySelector('.backdrop');
const picShown = document.getElementById('pic-shown');
const picShownFrame = document.querySelector('.picAndButtons');
const modal = document.querySelector('.modal');
const leftArrow = document.getElementById('arrowBtn1');
const rightArrow = document.getElementById('arrowBtn2');
const navbar = document.querySelector('.navbar');
const closeBtn = document.getElementById('close-btn');
const photoDesc = document.getElementById('photo-description');

let picIndex;

var winY = null;

window.addEventListener('scroll', function () {
  if (winY !== null) {
    // window.scrollTo(winX, winY);
    window.scrollTo({
      top: winY,
      behavior: 'instant',
    });
  }
});

function disableScroll() {
  winY = window.scrollY;
}

function enableScroll() {
  winY = null;
}

picFrame.addEventListener('click', (e) => {
  // document.body.style.overflow = 'hidden';
  // document.documentElement.style.overflowY = 'hidden';
  disableScroll();
  navbar.style.display = 'none';
  backdrop.style.display = 'block';
  modal.style.display = 'block';

  picShown.src = e.target.src;
  console.log(picShown.height);
  // console.log(
  //   `window height: ${window.innerHeight} bu da margin:${
  //     (Number(window.innerHeight) - Number(picShown.clientHeight)) / 2
  //   } `
  // );
  // console.log(picShown.clientHeight);
  // console.log(picShown.clientHeight);
  // console.log(picShown.offsetHeight);
  // console.log(window.innerHeight);
  // const marginTop2 = (window.innerHeight - picShown.scrollHeight) / 2;
  // console.log(marginTop2);
  // console.log(
  //   (Number(window.innerHeight) - Number(picShown.clientHeight)) / 2
  // );
  // picShown.style.marginTop = `${
  //   (Number(window.innerHeight) - Number(picShown.clientHeight)) / 2
  // }px`;
  // picShown.style.marginTop = marginTop2;
  if (window.innerWidth <= 600) {
    picShown.style.top = '0px';
    picShown.style.marginTop = '0px';
    picShown.style.top = `${(window.innerHeight - picShown.height) / 2}px`;
    console.log((window.innerHeight - picShown.offsetHeight) / 2);
  } else {
    picShown.style.top = `${
      (window.innerHeight - picShown.clientHeight) / 2
    }px`;
    console.log((window.innerHeight - picShown.clientHeight) / 2);
  }

  pics.forEach((pic, index) => {
    if (pic.currentSrc === e.target.src) picIndex = index;
  });
});
backdrop.addEventListener('click', () => {
  backdrop.style.display = 'none';
  navbar.style.display = 'flex';
  // document.body.style.overflow = 'scroll';
  // document.body.style.overflowX = 'hidden';
  // document.documentElement.style.overflowY = '';
  enableScroll();
  modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
  if (
    e.target.id !== 'pic-shown' &&
    e.target.id !== 'arrowBtn1' &&
    e.target.id !== 'arrowBtn2' &&
    e.target.id !== 'closeBtn' &&
    e.target.tagName !== 'IMG'
  ) {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
    // document.documentElement.style.overflowY = '';

    // document.body.style.overflowX = 'hidden';
    navbar.style.display = 'flex';
    enableScroll();
  }
});

const changePic = (str) => {
  let newSrc;
  if (str === 'left') {
    if (picIndex !== 0) {
      newSrc = pics[picIndex - 1].currentSrc;
      picIndex--;
      picShown.src = newSrc;
      if (window.innerWidth <= 600) {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      } else {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      }
      //   photoDesc.innerText = pics[picIndex].alt;
    } else {
      newSrc = pics[pics.length - 1].currentSrc;
      picIndex = pics.length - 1;
      picShown.src = newSrc;
      if (window.innerWidth <= 600) {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      } else {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      }
      //   photoDesc.innerText = pics[picIndex].alt;
    }
  } else if (str === 'right') {
    if (picIndex !== pics.length - 1) {
      newSrc = pics[picIndex + 1].currentSrc;
      picIndex++;
      picShown.src = newSrc;
      if (window.innerWidth <= 600) {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      } else {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      }
      //   photoDesc.innerText = pics[picIndex].alt;
    } else {
      newSrc = pics[0].currentSrc;
      picIndex = 0;
      picShown.src = newSrc;
      if (window.innerWidth <= 600) {
        picShown.style.top = `${
          (window.innerHeight - window.innerWidth) / 2
        }px`;
      } else {
        picShown.style.top = `${
          (window.innerHeight - picShown.clientHeight) / 2
        }px`;
      }
      //   photoDesc.innerText = pics[picIndex].alt;
    }
  } else {
  }
};
leftArrow.addEventListener('click', () => changePic('left'));
rightArrow.addEventListener('click', () => changePic('right'));

closeBtn.addEventListener('click', () => {
  backdrop.style.display = 'none';
  enableScroll();
  // document.documentElement.style.overflowY = '';
  // document.documentElement.style.height = '100%';
  // document.documentElement.style.position = 'relative';
  modal.style.display = 'none';
  document.body.style.overflowX = 'hidden';
  navbar.style.display = 'grid';
});

let touchstartX = 0;
let touchendX = 0;

const slider = document.getElementById('pic-shown-frame');

function handleGesture() {
  if (touchendX < touchstartX) {
    changePic('left');
  }
  if (touchendX > touchstartX) {
    changePic('right');
  }
}

slider.addEventListener('touchstart', (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

slider.addEventListener('touchend', (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});
