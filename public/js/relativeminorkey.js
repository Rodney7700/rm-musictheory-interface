/**************
 * Music Theory (Interface) - AJAX - Relative Minor Key 
 */

const submitButton = document.getElementById('relativeminorkey');

function createMinorKeyList(minorKey) {
  // Create <ul> for the Key Notes received in response
  const minorKeyUL = document.createElement('ul');

  const minorKeyLI = document.createElement('li');

  minorKey = minorKey.charAt(0).toUpperCase() + minorKey.slice(1);
  
  minorKeyLI.innerHTML = minorKey.replace('#', '&#9839;').replace('b', '&#9837;') + ' Minor'; 
  
  + minorKey.slice(1) + ' Minor';

  // Assign a class name to the <li> created
  minorKeyLI.className = 'li__name';
  
  // append key name list to chordNameUL
  minorKeyUL.appendChild(minorKeyLI);

  // Assign a class name to the <ul> created
  minorKeyUL.className = 'u-display-flex';

  return minorKeyUL;  
}

function displayResult(data) {
  const minorKey = data;
  const minorKeyDIV = document.getElementById('minor-key');
    
  // Create <ul> for the Main Chord Notes received in response
  const minorKeyUL = createMinorKeyList(minorKey);
  
  minorKeyDIV.className = 'u-display-flex';

  // clear contents of minorKeyDIV
  minorKeyDIV.innerHTML = '';  

  // append applicable ULs to minorKeyDIV
  minorKeyDIV.appendChild(minorKeyUL);
}

function getFormData() {
  const majorKeys = document.getElementById('majorkeys');
  
  let formDataObject = {};
  let majorKey = '';
  
  majorKey = majorKeys.options[majorKeys.selectedIndex].value;

  formDataObject.key = majorKey;

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

  postData('http://localhost:8080/relativeminorkey', dataToSubmit)
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