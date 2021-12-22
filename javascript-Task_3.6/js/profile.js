let dataProfileObject1 = JSON.parse(localStorage.getItem('dataProfile1'));
let dataProfileObject2 = JSON.parse(localStorage.getItem('dataProfile2'));

console.log(dataProfileObject1);
console.log(dataProfileObject2);

let getDataProfile = () => {
  const { Username: username, 'Email address': emailAddress } = dataProfileObject1;

  data1.insertAdjacentHTML('beforeend', username);
  data2.insertAdjacentHTML('beforeend', emailAddress);

  for (let key in dataProfileObject2) {
    let result = dataProfileObject2[key];
    console.log(result);
    data3.insertAdjacentHTML('beforeend', `<p>${result}</p>`);
  }
}

getDataProfile();
