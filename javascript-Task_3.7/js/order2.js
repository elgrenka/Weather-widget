function getQueryString() {
  const params = new URLSearchParams(location.search);
  let hiddenName = params.get('name');
  let hiddenEmail = params.get('email');
  let hiddenPhone = params.get('phone');
  let hiddenAddress = params.get('address');
  let hiddenCity = params.get('city');
  let hiddenState = params.get('state');
  let hiddenZip = params.get('zip');
  document.querySelector('#hidden_name').value = hiddenName;
  document.querySelector('#hidden_email').value = hiddenEmail;
  document.querySelector('#hidden_phone').value = hiddenPhone;
  document.querySelector('#hidden_address').value = hiddenAddress;
  document.querySelector('#hidden_city').value = hiddenCity;
  document.querySelector('#hidden_state').value = hiddenState;
  document.querySelector('#hidden_zip').value = hiddenZip;
  console.log(hiddenName,'\n', hiddenEmail,'\n', hiddenPhone,'\n', hiddenAddress,'\n', hiddenCity,'\n', hiddenState,'\n', hiddenZip);
}

getQueryString();

