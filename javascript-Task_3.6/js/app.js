let form = document.querySelector('.account_form');
let username = form.querySelector('#username');
let password = form.querySelector('#password');
let passwordConfirm = form.querySelector('#password_confirm');
let email = form.querySelector('#email');
let fulls = form.querySelectorAll('.not_empty');
let lodgings = form.querySelectorAll('.lodging');
let dataProfile1;
let dataProfile2 = {};

let generateError = (text) => {
  let error = document.createElement('div');
  error.className = 'error';
  error.style.color = 'red';
  error.style.fontSize = '1rem';
  error.innerHTML = text;
  return error;
}

let removeValidation = () => {
  let errors = form.querySelectorAll('.error');
  for (let i = 0; i < errors.length; i++) {
    errors[i].remove();
  }
}

let checkFields = () => {
  for (let i = 0; i < fulls.length; i++) {
    if (!fulls[i].value) {
      let error = generateError('Field cannot be empty');
      form[i].parentElement.insertBefore(error, fulls[i]);
      return false;
    }
  }
  return true;
}


let checkPassword = () => {
  if (password.value !== passwordConfirm.value) {
    let error = generateError(`Passwords doesn't match`);
    password.parentElement.insertBefore(error, password);
    return false;
  } else if (password.value.length < 8 || password.value === '') {
    error = generateError('Min length 8 characters');
    password.parentElement.insertBefore(error, password);
    return false;
  }
  return true;
}

let checkUsername = () => {
  let correctLetters = /^[a-zA-Z\s]+$/;
  if (username.value.length < 3) {
    error = generateError('Min name 3 characters');
    username.parentElement.insertBefore(error, username);
    return false;
  } else if (correctLetters.test(username.value) === false) {
    error = generateError('Enter correct letters');
    username.parentElement.insertBefore(error, username);
    return false;
  }
  return true;
}

let checkEmail = () => {
  let correctEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
  if (correctEmail.test(email.value) === false) {
    error = generateError('Enter valid email');
    email.parentElement.insertBefore(error, email);
    return false;
  }
  return true;
}

let setDataProfile = () => {
  dataProfile1 = {
    'Username': username.value,
    'Email address': email.value,
  }
  console.log(dataProfile1);
  localStorage.setItem('dataProfile1', JSON.stringify(dataProfile1));
}

let checkBoxes = () => {
  let checkBoxesArray = [];
  for (let i = 0; i < lodgings.length; i++) {
    if (lodgings[i].checked) {
      checkBoxesArray.push(lodgings[i].value);
    }
  }
  console.log(checkBoxesArray);
  localStorage.setItem('dataProfile2', JSON.stringify(checkBoxesArray));
}


form.addEventListener('submit', (ev) => {
  switch (false) {
    case checkUsername():
    case checkPassword():
    case checkEmail():
    case checkFields():
      ev.preventDefault();
  }

  removeValidation();

  checkFields();

  checkPassword();

  checkUsername();

  checkEmail();

  setDataProfile();

  checkBoxes();
});

