function getSubmittedData() {
  const params = new URLSearchParams(location.search);
  for (const entry of params.entries()) {
    submitted_data.insertAdjacentHTML('beforeend', `<p>${entry[0] + ' = ' + entry[1]}</p>`);
    console.log(entry[0] + ' = ' + entry[1]);
  }
}

getSubmittedData();


