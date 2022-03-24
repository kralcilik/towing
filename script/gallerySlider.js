const btn1 = document.getElementById('direction-btn-1');
const btn2 = document.getElementById('direction-btn-2');
const btn3 = document.getElementById('direction-btn-3');
const galleryPart1 = document.querySelector('.gallery-part1');
const galleryPart2 = document.querySelector('.gallery-part2');
const galleryPart3 = document.querySelector('.gallery-part3');

let currentPos = 1;

const moveGallery = (num) => {
  let difference;
  if (num === 1) {
    if (currentPos !== 1) {
      currentPos = 1;
      galleryPart1.style.transform = 'translateX(0)';
      galleryPart2.style.transform = 'translateX(100vw)';
      galleryPart3.style.transform = 'translateX(200vw)';

      btn2.classList.add('hoverable');
      btn3.classList.add('hoverable');
      btn1.classList.remove('hoverable');
    }
  } else if (num === 2) {
    if (currentPos !== 2) {
      currentPos = 2;
      galleryPart1.style.transform = 'translateX(-100vw)';
      galleryPart2.style.transform = 'translateX(-100vw)';
      galleryPart3.style.transform = 'translateX(-100vw)';
      btn1.classList.add('hoverable');
      btn3.classList.add('hoverable');
      btn2.classList.remove('hoverable');
    }
  } else if (num === 3) {
    if (currentPos !== 3) {
      currentPos = 3;
      galleryPart1.style.transform = 'translateX(-200vw)';
      galleryPart2.style.transform = 'translateX(-200vw)';
      galleryPart3.style.transform = 'translateX(-200vw)';
      btn1.classList.add('hoverable');
      btn2.classList.add('hoverable');
      btn3.classList.remove('hoverable');
    }
  }
};

btn1.addEventListener('click', () => moveGallery(1));
btn2.addEventListener('click', () => moveGallery(2));
btn3.addEventListener('click', () => moveGallery(3));
