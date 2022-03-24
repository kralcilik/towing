let clientName = document.getElementById('name');
let clientEmail = document.getElementById('email');
let clientPhone = document.getElementById('phone');
let clientMsg = document.getElementById('message');
const successModalEmail = document.querySelector('.success-modal');
const errorModalEmail = document.querySelector('.error-modal');
const submitBtn = document.getElementById('send-msg');
const blurBackDropEmail = document.querySelector('.blur-backdrop');

let nameError = '';
let emailError = '';
let phoneError = '';
let msgError = '';
let nameErrValue = false;
let emailErrValue = false;
let phoneErrValue = false;
let msgErrValue = false;

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

const sendEmail = () => {
  try {
    axios
      .post(
        `/sendEmail/?name=${clientName.value}&email=${clientEmail.value}&phone=${clientPhone.value}&msg=${clientMsg.value}`
      )
      .then(function (response) {
        if (response.data === 'success') {
          blurBackDropEmail.style.display = 'block';
          successModalEmail.style.display = 'flex';
          disableScroll();
          clientName.value = '';
          clientEmail.value = '';
          clientPhone.value = '';
          clientMsg.value = '';
        }
      })
      .catch(function (error) {
        blurBackDropEmail.style.display = 'block';
        errorModalEmail.style.display = 'flex';
        disableScroll();
      });
  } catch (error) {
    blurBackDropEmail.style.display = 'block';
    errorModalEmail.style.display = 'flex';
    disableScroll();
  }
};

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const phoneString = String(clientPhone.value);
  const phoneFormatted =
    phoneString.charAt(1) +
    phoneString.charAt(2) +
    phoneString.charAt(3) +
    phoneString.charAt(6) +
    phoneString.charAt(7) +
    phoneString.charAt(8) +
    phoneString.charAt(10) +
    phoneString.charAt(11) +
    phoneString.charAt(12) +
    phoneString.charAt(13);
  const phoneCondition = !isNaN(phoneFormatted);
  if (
    clientName.value.trim().length === 0 ||
    clientName.value === 'Please enter your name.'
  ) {
    nameError = 'Please enter your name.';
  } else nameError = '';
  if (clientEmail.value.trim().length === 0) {
    emailError = 'Please enter your email.';
  } else {
    if (
      String(clientEmail.value).includes('@') &&
      String(clientEmail.value).includes('.')
    ) {
      let index1 = String(clientEmail.value).indexOf('@');
      let index2 = String(clientEmail.value).indexOf('.');

      if (index2 < index1) {
        emailError = 'Please enter a valid email.';
      } else {
        let lengthOfEmail = clientEmail.value.length;
        if (index2 + 3 > lengthOfEmail)
          emailError = 'Please enter a valid email.';
        else {
          emailError = '';
        }
      }
    } else {
      emailError = 'Please enter a valid email.';
    }
  }
  if (
    clientMsg.value.trim().length === 0 ||
    clientMsg.value === 'Please enter your message.'
  ) {
    msgError = 'Please enter your message.';
  } else msgError = '';
  if (clientPhone.value.trim().length !== 0) {
    if (phoneFormatted.length !== 10) {
      phoneError = 'Please enter 10 digits.';
    } else if (!phoneCondition) {
      phoneError = 'Please enter 10 digits.';
      console.log('error burda');
    } else phoneError = '';
  } else phoneError = '';

  if (
    nameError === '' &&
    emailError === '' &&
    phoneError === '' &&
    msgError === ''
  ) {
    sendEmail();
  } else {
    if (nameError !== '') {
      clientName.style.background = '#ce0000';
      clientName.value = nameError;
      nameErrValue = true;
    }
    if (emailError !== '') {
      clientEmail.style.background = '#ce0000';
      clientEmail.value = emailError;
      emailErrValue = true;
    }
    if (phoneError !== '') {
      clientPhone.style.background = '#ce0000';
      clientPhone.value = phoneError;
      phoneErrValue = true;
    }
    if (msgError !== '') {
      clientMsg.style.background = '#ce0000';
      clientMsg.value = msgError;
      msgErrValue = true;
    }
  }
});

clientName.addEventListener('focus', () => {
  if (nameErrValue) {
    clientName.value = '';
    clientName.style.background = 'transparent';
    nameErrValue = false;
  }
});
clientEmail.addEventListener('focus', () => {
  if (emailErrValue) {
    clientEmail.value = '';
    clientEmail.style.background = 'transparent';
    emailErrValue = false;
  }
});
clientPhone.addEventListener('focus', () => {
  if (phoneErrValue) {
    clientPhone.value = '';
    clientPhone.style.background = 'transparent';
    phoneErrValue = false;
  }
});
clientMsg.addEventListener('focus', () => {
  if (msgErrValue) {
    clientMsg.value = '';
    clientMsg.style.background = 'transparent';
    msgErrValue = false;
  }
});

blurBackDropEmail.addEventListener('click', () => {
  blurBackDropEmail.style.display = 'none';
  successModalEmail.style.display = 'none';
  errorModalEmail.style.display = 'none';
  startScroll();
});
