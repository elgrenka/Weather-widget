const button = document.getElementById('button');

class NameClass {
  // constructor() {}

  getNameObject() {
    let nameObject = {
      firstName: document.getElementById('first_name').value,
      lastName: document.getElementById('last_name').value
    }
    return nameObject;
  }
}

let MyNameClass = new NameClass();


class DateClass {
  // constructor() {}

  getDateObject() {
    let dateObject = {
      dateFirst: document.getElementById('date_first').value,
      dateNext: document.getElementById('date_next').value
    }

    if (dateObject.dateFirst !== "" && dateObject.dateNext !== "") {
      document.querySelector('#discount').innerHTML = "5%";
    }

    return dateObject;
  }
}

let MyDateClass = new DateClass();


class ValidClass {
  // constructor() {}

  checkValidForm() {
    let firstName = document.querySelector('#first_name');
    let lastName = document.querySelector('#last_name');
    let dateFirst = document.querySelector('#date_first')
    let payment = document.querySelector('#payment');

    if (firstName.value === "") {
      alert("Please enter your first name");
      firstName.focus();
      return false;
    }
  
    if (lastName.value === "") {
      alert("Please enter your last name");
      lastName.focus();
      return false;
    }

    if (dateFirst.value === "") {
      alert("Please enter the date");
      dateFirst.focus();
      return false;
    }
  
    if (payment.selectedIndex < 1) {
      alert("Please choose payment method");
      payment.focus();
      return false;
    }
    return true;
  }
}

let MyValidClass = new ValidClass();


class DiscountClass {
  // constructor() {}

  getDiscountObject() {
    let discountObject = {
      discount: document.querySelector('#discount').textContent
    }

    return discountObject;
  }
}

let MyDiscountClass = new DiscountClass();


class AllClass {
  // constructor() {}

  getAllObject() {
    let allObject = {
      nameObject: MyNameClass.getNameObject(),
      dateObject: MyDateClass.getDateObject(),
      discountObject: MyDiscountClass.getDiscountObject()
    }

    document.querySelector('form').reset();
    return allObject;
  }
}

let MyAllClass = new AllClass();


button.addEventListener('click', function() {
  console.log(MyValidClass.checkValidForm());
  console.log(MyNameClass.getNameObject());
  console.log(MyDateClass.getDateObject());
  console.log(MyDiscountClass.getDiscountObject());
  console.log(MyAllClass.getAllObject());
});

