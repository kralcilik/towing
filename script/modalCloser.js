const successClose1 = document.getElementById('close-modal-btn');
const successClose2 = document.getElementById('close-modal-big-btn');
const successModal = document.querySelector('.success-modal');

const errorClose1 = document.getElementById('close-modal-btn-error');
const errorClose2 = document.getElementById('close-modal-big-btn-error');
const errorModal = document.querySelector('.error-modal');

const blurBackDrop = document.querySelector('.blur-backdrop');

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

const closeSuccessModal = () => {
  blurBackDropEmail.style.display = 'none';
  successModalEmail.style.display = 'none';
  errorModalEmail.style.display = 'none';
  enableScroll();
};

successClose1.addEventListener('click', closeSuccessModal);
successClose2.addEventListener('click', closeSuccessModal);

const closeErrorModal = () => {
  blurBackDropEmail.style.display = 'none';
  successModalEmail.style.display = 'none';
  errorModalEmail.style.display = 'none';
  enableScroll();
};

errorClose1.addEventListener('click', closeErrorModal);
errorClose2.addEventListener('click', closeErrorModal);
