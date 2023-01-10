/**************
 * Music Theory (Interface) - AJAX - Notes In Key 
 */

const submitButton = document.getElementById('notesinkey');

function createKeyNoteList(keyNotes) {
  // Create <ul> for the Key Notes received in response
  const keyNotesUL = document.createElement('ul');

  for (let i = 0; i < keyNotes.length; i++) {
    const keyNoteLI = document.createElement('li');

    keyNoteLI.innerHTML = keyNotes[i];

    // Assign a class name to the <li> created
    keyNoteLI.className = 'li__note';
    
    // append key name list to chordNameUL
    keyNotesUL.appendChild(keyNoteLI);
  }

  // Assign a class name to the <ul> created
  keyNotesUL.className = 'u-display-flex';

  return keyNotesUL;  
}

function displayResult(data) {
  const notesInKey = data;
  const keyNotesDIV = document.getElementById('key-notes');
    
  // Create <ul> for the Main Chord Notes received in response
  const keyNotesUL = createKeyNoteList(notesInKey);
  
  keyNotesDIV.className = 'u-display-flex';

  // clear contents of chordNotesDIV
  keyNotesDIV.innerHTML = '';  

  // append applicable ULs to keyNotesDIV
  keyNotesDIV.appendChild(keyNotesUL);
}

function getFormData() {
  const keys = document.getElementById('keys');
  
  let formDataObject = {};
  let key = '';
  
  key = keys.options[keys.selectedIndex].value;

  formDataObject.key = key;

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

  postData('http://localhost:8080/notesinkey', dataToSubmit)
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