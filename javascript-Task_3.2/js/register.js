let data = [];

const addData = (ev) => {
  ev.preventDefault();
  let userData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
    confirm_password: document.getElementById('c-password').value
  }
  data.push(userData);
  document.forms[0].reset();
  localStorage.setItem('data', JSON.stringify(data));
  console.log(localStorage.getItem('data'));
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addData);
});

 