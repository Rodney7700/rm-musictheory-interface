/**************
 * Music Theory (Interface) - AJAX - Note At Interval
 */

const submitButton = document.getElementById('noteatinterval');

function createIntervalNoteList(intervalNote) {
  // Create <ul> for the Interval Note received in response
  const intervalNoteUL = document.createElement('ul');

  const intervalNoteLI = document.createElement('li');
  intervalNoteLI.innerHTML = intervalNote.replace('#', '&#9839;')
                                         .replace('b', '&#9837;');

  // Assign a class name to the <li> created
  intervalNoteLI.className = 'li__note';
  
  // append chord name list to intervalNoteUL
  intervalNoteUL.appendChild(intervalNoteLI);
  
  // Assign a class name to the <ul> created
  intervalNoteUL.className = 'u-display-flex';

  return intervalNoteUL;  
}

function enharmonicCorrection(note) {
  switch(note) {
    case 'B#':
      return 'C';      
    case 'Cb':
      return 'B';
    case 'E#':
      return 'F';
    case 'Fb':
      return 'E';
    default:
      return note;    
  }
}

function displayResult(data) {
  const intervalNote = enharmonicCorrection(data);  
  const intervalNoteDIV = document.getElementById('interval-note');
      
  // Create <ul> for the Interval Note received in response
  const intervalNoteUL = createIntervalNoteList(intervalNote);

  // clear contents of intervalNoteDIV
  intervalNoteDIV.innerHTML = '';

  intervalNoteDIV.appendChild(intervalNoteUL);
}

function getFormData() {
  const notes = document.getElementsByName('rootnote');
  const intervalsOptions = document.getElementById('intervaloptions');
  const directionSelected = document.getElementById('up').checked;
  
  let formDataObject = {};
  let note = '';
  let intervalName = '';
  let direction = true;

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].checked) {
      note = notes[i].value;
    }
  }

  direction = directionSelected ? true : false;

  intervalName = intervalsOptions.options[intervalsOptions.selectedIndex].value;

  formDataObject.rootNote = note;
  formDataObject.intervalName = intervalName;
  formDataObject.direction = direction;

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

  postData('http://localhost:8080/noteatinterval', dataToSubmit)
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