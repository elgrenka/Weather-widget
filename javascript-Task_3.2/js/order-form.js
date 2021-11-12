// fill fields when checkbox checked
same.addEventListener("click", function () {
  if (same.checked) {
    delivery_first_name.value = billing_first_name.value;
    delivery_last_name.value = billing_last_name.value;
    delivery_address.value = billing_address.value;
    delivery_regions.value = billing_regions.value;
    delivery_zip.value = billing_zip.value;
    delivery_phone.value = billing_phone.value;
  }
});


//Create references to the dropdown's
const yearSelect = document.getElementById("year");
const monthSelect = document.getElementById("month");
const daySelect = document.getElementById("day");

const months = ['January', 'February', 'March', 'April',
  'May', 'June', 'July', 'August', 'September', 'October',
  'November', 'December'];

//Months are always the same
(function populateMonths() {
  for (let i = 0; i < months.length; i++) {
    const option = document.createElement('option');
    option.textContent = months[i];
    monthSelect.appendChild(option);
  }
  monthSelect.value = "January";
})();

let previousDay;

function populateDays(month) {
  //Delete all of the children of the day dropdown
  //if they do exist
  while (daySelect.firstChild) {
    daySelect.removeChild(daySelect.firstChild);
  }
  //Holds the number of days in the month
  let dayNum;
  //Get the current year
  let year = yearSelect.value;

  if (month === 'January' || month === 'March' ||
    month === 'May' || month === 'July' || month === 'August'
    || month === 'October' || month === 'December') {
    dayNum = 31;
  } else if (month === 'April' || month === 'June'
    || month === 'September' || month === 'November') {
    dayNum = 30;
  } else {
    //Check for a leap year
    if (new Date(year, 1, 29).getMonth() === 1) {
      dayNum = 29;
    } else {
      dayNum = 28;
    }
  }
  //Insert the correct days into the day <select>
  for (let i = 1; i <= dayNum; i++) {
    const option = document.createElement("option");
    option.textContent = i;
    daySelect.appendChild(option);
  }
  if (previousDay) {
    daySelect.value = previousDay;
    if (daySelect.value === "") {
      daySelect.value = previousDay - 1;
    }
    if (daySelect.value === "") {
      daySelect.value = previousDay - 2;
    }
    if (daySelect.value === "") {
      daySelect.value = previousDay - 3;
    }
  }
}

function populateYears() {
  //Get the current year as a number
  let year = new Date().getFullYear();
  //Make the previous 100 years be an option
  for (let i = 0; i < 10; i++) {
    const option = document.createElement("option");
    option.textContent = year + i;
    yearSelect.appendChild(option);
  }
}

populateDays(monthSelect.value);
populateYears();

yearSelect.onchange = function () {
  populateDays(monthSelect.value);
}
monthSelect.onchange = function () {
  populateDays(monthSelect.value);
}
daySelect.onchange = function () {
  previousDay = daySelect.value;
}


function validForm() {
  var bike = document.forms["order-form"]["bikes"];
  var billing_first_name = document.forms["order-form"]["billing-first-name"];
  var billing_last_name = document.forms["order-form"]["billing-last-name"];
  var billing_address = document.forms["order-form"]["billing-address"];
  var billing_region = document.forms["order-form"]["billing-regions"];
  var billing_zip = document.forms["order-form"]["billing-zip"];
  var billing_phone = document.forms["order-form"]["billing-phone"];
  var delivery_first_name = document.forms["order-form"]["delivery-first-name"];
  var delivery_last_name = document.forms["order-form"]["delivery-last-name"];
  var delivery_address = document.forms["order-form"]["delivery-address"];
  var delivery_region = document.forms["order-form"]["delivery-regions"];
  var delivery_zip = document.forms["order-form"]["delivery-zip"];
  var delivery_phone = document.forms["order-form"]["delivery-phone"];
  var type_card = document.forms["order-form"]["type_card"];
  var card_number = document.forms["order-form"]["card_number"];
  var expiration_month = document.forms["order-form"]["expiration_month"];
  var expiration_year = document.forms["order-form"]["expiration_year"];
  var cvv = document.forms["order-form"]["cvv"];
  var password = document.forms["order-form"]["password"];
  var password2 = document.forms["order-form"]["password2"];

  if (bike.selectedIndex < 1) {
    alert("Please choose bike");
    bike.focus();
    return false;
  }

  if (billing_first_name.value === "") {
    window.alert("Please enter your first name");
    billing_first_name.focus();
    return false;
  }

  if (billing_last_name.value === "") {
    window.alert("Please enter your last name");
    billing_last_name.focus();
    return false;
  }

  if (billing_address.value === "") {
    window.alert("Please enter your address");
    billing_address.focus();
    return false;
  }

  if (billing_region.selectedIndex < 1) {
    window.alert("Please choose your region");
    billing_region.focus();
    return false;
  }

  if (billing_zip.value === "") {
    window.alert("Please enter your zip code");
    billing_zip.focus();
    return false;
  }

  if (billing_phone.value === "") {
    window.alert("Please enter phone number");
    billing_phone.focus();
    return false;
  }

  if (delivery_first_name.value === "") {
    window.alert("Please enter your first name");
    delivery_first_name.focus();
    return false;
  }

  if (delivery_last_name.value === "") {
    window.alert("Please enter your last name");
    delivery_last_name.focus();
    return false;
  }

  if (delivery_address.value === "") {
    window.alert("Please enter your address");
    delivery_address.focus();
    return false;
  }

  if (delivery_region.selectedIndex < 1) {
    window.alert("Please choose your region");
    delivery_region.focus();
    return false;
  }

  if (delivery_zip.value === "") {
    window.alert("Please enter your zip code");
    delivery_zip.focus();
    return false;
  }

  if (delivery_phone.value === "") {
    window.alert("Please enter your phone number");
    delivery_phone.focus();
    return false;
  }

  if (type_card.selectedIndex < 1) {
    window.alert("Please choose card");
    type_card.focus();
    return false;
  }

  if (card_number.value === "" || card_number.value.length < 16) {
    window.alert("Please enter card number at least 16 characters");
    card_number.focus();
    return false;
  }

  if (expiration_month.selectedIndex < 1) {
    window.alert("Please choose month");
    expiration_month.focus();
    return false;
  }

  if (expiration_year.selectedIndex < 1) {
    window.alert("Please choose year");
    expiration_year.focus();
    return false;
  }

  if (cvv.value === "" || cvv.value.length < 3) {
    window.alert("Please enter cvv code 3 characters");
    cvv.focus();
    return false;
  }

  if (password.value !== password2.value) {
    window.alert("Passwords must match");
    password.focus();
    return false;
  }

  return true;
}


function allData() {
  //gettting the values
  var bike = document.getElementById("model").value;
  var comments = document.getElementById("comments").value;
  var billing_first_name = document.getElementById("billing_first_name").value
  var billing_last_name = document.getElementById("billing_last_name").value;
  var billing_address = document.getElementById("billing_address").value;
  var billing_regions = document.getElementById("billing_regions").value;
  var billing_zip = document.getElementById("billing_zip").value;
  var billing_phone = document.getElementById("billing_phone").value;
  var delivery_first_name = document.getElementById("delivery_first_name").value
  var delivery_last_name = document.getElementById("delivery_last_name").value;
  var delivery_address = document.getElementById("delivery_address").value;
  var delivery_regions = document.getElementById("delivery_regions").value;
  var delivery_zip = document.getElementById("delivery_zip").value;
  var delivery_phone = document.getElementById("delivery_phone").value;
  var day = document.getElementById("day").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;
  var type_card = document.getElementById("type_card").value;
  var card_number = document.getElementById("card_number").value;
  var expiration_month = document.getElementById("expiration_month").value;
  var expiration_year = document.getElementById("expiration_year").value;
  var cvv = document.getElementById("cvv").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var password2 = document.getElementById("password2").value;

  //saving the values in local storage
  let userData = {
    "Bike": bike,
    "Comments": comments,
    "Billing first name": billing_first_name,
    "Billing last name": billing_last_name,
    "Billing address": billing_address,
    "Billing regions": billing_regions,
    "Billing zip": billing_zip,
    "Billing phone": billing_phone,
    "Delivery first name": delivery_first_name,
    "Delivery last name": delivery_last_name,
    "Delivery address": delivery_address,
    "Delivery regions": delivery_regions,
    "Delivery zip": delivery_zip,
    "Delivery phone": delivery_phone,
    "Day": day,
    "Month": month,
    "Year": year,
    "Type of card": type_card,
    "Card number": card_number,
    "Expiration month": expiration_month,
    "Expiration year": expiration_year,
    "CVV": cvv,
    "Username": username,
    "Password": password,
    "Confirm password": password2
  }

  localStorage.setItem('userDataStorage', JSON.stringify(userData));
}
