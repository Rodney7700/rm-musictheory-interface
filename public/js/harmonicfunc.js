/**************
 * Music Theory (Interface) - AJAX - Chord By Harmonic Function 
 */

const submitButton = document.getElementById('harmonicfunc');
const keyTypeOptions = document.getElementById('keytypeoptions');

function showHideMajorMinorKeyOptions() { 
  const keyTypeSelections = document.getElementsByName('keytype'); 
  const majorKeysOptionDisplayStatus = document.getElementById('majorharmonicfunc');
  const minorKeysOptionDisplayStatus = document.getElementById('minorharmonicfunc');
  const actionDivDisplayStatus = document.getElementById('action');
    
  if (keyTypeSelections[0].checked) {
    majorKeysOptionDisplayStatus.style.display = 'block';
    minorKeysOptionDisplayStatus.style.display = 'none';
    actionDivDisplayStatus.style.display = 'block';
  }

  if (keyTypeSelections[1].checked) {
    majorKeysOptionDisplayStatus.style.display = 'none';
    minorKeysOptionDisplayStatus.style.display = 'block';
    actionDivDisplayStatus.style.display = 'block';
  }
}

function createChordNoteList(chordNotes) {
  // Create <ul> for the Chord Notes received in response
  const chordNotesUL = document.createElement('ul');

  for (let i = 0; i < chordNotes.length; i++) {
    const chordNoteLI = document.createElement('li');

    chordNoteLI.innerHTML = chordNotes[i].replace('#', '&#9839;')
                                         .replace('b', '&#9837;');

    // Assign a class name to the <li> created
    chordNoteLI.className = 'li__note';
    
    // append chord name list to chordNameUL
    chordNotesUL.appendChild(chordNoteLI);
  }

  // Assign a class name to the <ul> created
  chordNotesUL.className = 'u-display-flex';

  return chordNotesUL;  
}

function displayResult(data) {
  // const chordNotes = data;
  // const chordNotes = [ data[0], data[1][0], data[2][0]];
  let chordNotes = [ data[0] ];

  for (let i = 1; i < data.length; i++) {
    chordNotes.push(data[i][0]);
  }

  const chordNotesDIV = document.getElementById('chord-notes');
    
  // Create <ul> for the Main Chord Notes received in response
  const chordNotesUL = createChordNoteList(chordNotes);
  
  chordNotesDIV.className = 'u-display-flex';

  // clear contents of chordNotesDIV
  chordNotesDIV.innerHTML = '';  

  // append applicable ULs to chordNotesDIV
  chordNotesDIV.appendChild(chordNotesUL);
}

function getFormData() {
  const majorKeys = document.getElementById('majorkeys');
  const majorChordFunction = document.getElementById('chordfunctionmajor');
  const minorKeys = document.getElementById('minorkeys');
  const minorChordFunction = document.getElementById('chordfunctionminor');
  const keyTypeSelections = document.getElementsByName('keytype');
  
  let formDataObject = {};
  
  if (keyTypeSelections[0].checked) {
    formDataObject.key = majorKeys.options[majorKeys.selectedIndex].value;
    formDataObject.chordFunction = majorChordFunction.options[majorChordFunction.selectedIndex].value;
  }

  if (keyTypeSelections[1].checked) {
    formDataObject.key = minorKeys.options[minorKeys.selectedIndex].value;
    formDataObject.chordFunction = minorChordFunction.options[minorChordFunction.selectedIndex].value;
  }

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

  postData('http://localhost:8080/harmonicfunc', dataToSubmit)
  .then((data) => {    
    displayResult(data);    
  })
  .catch( error => {
    console.error('Error: ', error);
  });
}

keyTypeOptions.addEventListener('click', ()=>{
  showHideMajorMinorKeyOptions();
});

submitButton.addEventListener('click', ()=>{
  postFormData();
});