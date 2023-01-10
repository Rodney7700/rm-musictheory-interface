/**************
 * Music Theory (Interface) - AJAX - Relative Major Key 
 */

const submitButton = document.getElementById('relativemajorkey');

function createMajorKeyList(majorKey) {
  // Create <ul> for the Key Notes received in response
  const majorKeyUL = document.createElement('ul');

  const majorKeyLI = document.createElement('li');

  majorKey = majorKey.charAt(0).toUpperCase() + majorKey.slice(1);
  
  majorKeyLI.innerHTML = majorKey.replace('#', '&#9839;').replace('b', '&#9837;') + ' Major';

  // Assign a class name to the <li> created
  majorKeyLI.className = 'li__name';
  
  // append key name list to chordNameUL
  majorKeyUL.appendChild(majorKeyLI);

  // Assign a class name to the <ul> created
  majorKeyUL.className = 'u-display-flex';

  return majorKeyUL;  
}

function displayResult(data) {
  const majorKey = data;
  const majorKeyDIV = document.getElementById('major-key');
    
  // Create <ul> for the Main Chord Notes received in response
  const majorKeyUL = createMajorKeyList(majorKey);
  
  majorKeyDIV.className = 'u-display-flex';

  // clear contents of majorKeyDIV
  majorKeyDIV.innerHTML = '';  

  // append applicable ULs to majorKeyDIV
  majorKeyDIV.appendChild(majorKeyUL);
}

function getFormData() {
  const minorKeys = document.getElementById('minorkeys');
  
  let formDataObject = {};
  let minorKey = '';
  
  minorKey = minorKeys.options[minorKeys.selectedIndex].value;

  formDataObject.key = minorKey;

  return formDataObject;
}

async function postData(url = '', data = {}) {
  // The function for submitting the request to the server
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'origin', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match 'Content-Type' header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function postFormData() {
  // The click event handler that starts the process of:
  //  (1) Getting the user data from the page
  //  (2) Cleaning up any data as required
  //  (3) Generating the HTML to display the response from the server
  
  let dataToSubmit = getFormData();  

  postData('http://localhost:8080/relativemajorkey', dataToSubmit)
  .then((data) => {    
    displayResult(data);    
  })
  .catch( error => {
    console.error('Error: ', error);
  });
}

submitButton.addEventListener('click', ()=>{
  postFormData();
});