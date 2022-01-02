let header1 = document.getElementById('header1');
let header2 = document.getElementById('header2');
let header3 = document.getElementById('header3');
let header4 = document.getElementById('header4');
let sticky1 = header1.offsetTop;
let sticky2 = header2.offsetTop;
let sticky3 = header3.offsetTop;
let sticky4 = header4.offsetTop;

window.onscroll = function () { myFunction() };

function myFunction() {
  if (window.pageYOffset > sticky4) {
    header4.classList.add('sticky');
  } else if (window.pageYOffset > sticky3) {
    header3.classList.add('sticky');
    header4.classList.remove('sticky');
  } else if (window.pageYOffset > sticky2) {
    header2.classList.add('sticky');
    header3.classList.remove('sticky');
  } else if (window.pageYOffset > sticky1) {
    header1.classList.add('sticky');
    header2.classList.remove('sticky');
  } else {
    header1.classList.remove('sticky');
  }
}

