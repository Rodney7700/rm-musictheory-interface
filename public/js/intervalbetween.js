/**************
 * Music Theory (Interface) - AJAX - Interval Between Notes
 */

const submitButton = document.getElementById('intervalbetween');

function createIntervalNameList(intervalName) {
  // Create <ul> for the Interval Name received in response
  const intervalNameUL = document.createElement('ul');

  const intervalNameLI = document.createElement('li');
  intervalNameLI.innerHTML = intervalName.replace('#', '&#9839;')
                                         .replace('b', '&#9837;');

  // Assign a class name to the <li> created
  intervalNameLI.className = 'li__name';
  
  // append chord name list to intervalNoteUL
  intervalNameUL.appendChild(intervalNameLI);
  
  // Assign a class name to the <ul> created
  intervalNameUL.className = 'u-display-flex';

  return intervalNameUL;  
}

function displayResult(data) {
  const intervalName = data;  
  const intervalNameDIV = document.getElementById('interval-name');
      
  // Create <ul> for the Interval Note received in response
  const intervalNameUL = createIntervalNameList(intervalName);

  // clear contents of intervalNoteDIV
  intervalNameDIV.innerHTML = '';

  intervalNameDIV.appendChild(intervalNameUL);
}

function getFormData() {
  const firstNoteOptions = document.getElementsByName('note1');
  const secondNoteOptions = document.getElementsByName('note2');
    
  let formDataObject = {};
  let firstNote = '';
  let secondNote = '';
  let useShorthand = false;  

  for (let i = 0; i < firstNoteOptions.length; i++) {
    if (firstNoteOptions[i].checked) {
      firstNote = firstNoteOptions[i].value;
    }
    if (secondNoteOptions[i].checked) {
      secondNote = secondNoteOptions[i].value;
    }
  }

  if (document.getElementById('use_shorthand').checked) {
    useShorthand = true;
  }
  
  formDataObject.rootNote = firstNote;
  formDataObject.secondNote = secondNote;
  formDataObject.useShorthand = useShorthand;

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

  postData('http://localhost:8080/intervalbetween', dataToSubmit)
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