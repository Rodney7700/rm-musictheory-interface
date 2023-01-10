/**************
 * Music Theory (Interface) - AJAX - Diatonic Note In Key
 */

const submitButton = document.getElementById('diatonicnoteinkey');
const keyTypeOptions = document.getElementById('keytypeoptions');

function showHideOptions() { 
  const keyTypeSelections = document.getElementsByName('keytype'); 
  const majorKeysOptionDisplayStatus = document.getElementById('majorkeyoptionsdisplay');
  const minorKeysOptionDisplayStatus = document.getElementById('minorkeyoptionsdisplay');
  const noteOptionDisplayStatus = document.getElementById('noteoptionsdisplay');
  const diatonicIntervalOptionsDisplayStatus = document.getElementById('diatonicintervalsoptionsdisplay');
  const actionDivDisplayStatus = document.getElementById('action');
    
  if (keyTypeSelections[0].checked) {
    majorKeysOptionDisplayStatus.style.display = 'block';
    minorKeysOptionDisplayStatus.style.display = 'none';
    noteOptionDisplayStatus.style.display = 'block';
    diatonicIntervalOptionsDisplayStatus.style.display = 'block';
    actionDivDisplayStatus.style.display = 'block';
  }

  if (keyTypeSelections[1].checked) {
    majorKeysOptionDisplayStatus.style.display = 'none';
    minorKeysOptionDisplayStatus.style.display = 'block';
    noteOptionDisplayStatus.style.display = 'block';
    diatonicIntervalOptionsDisplayStatus.style.display = 'block';
    actionDivDisplayStatus.style.display = 'block';
  }
}

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

function createCommentList(comment) {
  // Create <ul> for the Comment received in response
  const commentUL = document.createElement('ul');

  const commentLI = document.createElement('li');

  commentLI.innerHTML = comment.replace('#', '&#9839;')
                               .replace('b', '&#9837;');

  // Assign a class name to the <li> created
  commentLI.className = 'li__name';

  // append chord name list to chordNameUL
  commentUL.appendChild(commentLI);
  
  return commentUL;
}

function displayResult(data) {
  const intervalNote = data.intervalNote;
  const comment = data.comment;  
  const intervalNoteDIV = document.getElementById('interval-note');
  const commentDIV = document.getElementById('comments');
  let commentUL = null;
 
  // Create commentUL if there was a comment
  if (comment.length !== 0) {
    commentUL = createCommentList(comment);
  }
    
  // Create <ul> for the Interval Note received in response
  const intervalNoteUL = createIntervalNoteList(intervalNote);

  // clear contents of intervalNoteDIV
  intervalNoteDIV.innerHTML = '';

  intervalNoteDIV.appendChild(intervalNoteUL);

  // clear contents of commentDIV
  commentDIV.innerHTML = '';

  // If result came with a comment
  if (commentUL !== null) {
    commentDIV.appendChild(commentUL);
  }
}

function getFormData() {
  const keyTypeSelections = document.getElementsByName('keytype');
  const majorKeys = document.getElementById('majorkeys');
  const minorKeys = document.getElementById('minorkeys');
  const notes = document.getElementsByName('note');
  const diatonicIntervals = document.getElementById('diatonicintervals');
  
  let formDataObject = {};
  let key = '';
  let note = '';
  let intervalName = '';

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].checked) {
      note = notes[i].value;
    }
  }

  intervalName = diatonicIntervals.options[diatonicIntervals.selectedIndex].value;

  if (keyTypeSelections[0].checked) {
    key = majorKeys.options[majorKeys.selectedIndex].value;
  }

  if (keyTypeSelections[1].checked) {
    key = minorKeys.options[minorKeys.selectedIndex].value;
  }

  formDataObject.key = key;
  formDataObject.rootNote = note;
  formDataObject.intervalName = intervalName;

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

  postData('http://localhost:8080/diatonicnoteinkey', dataToSubmit)
  .then((data) => {    
    displayResult(data);    
  })
  .catch( error => {
    console.error('Error: ', error);
  });
}

keyTypeOptions.addEventListener('click', ()=>{
  showHideOptions();
});

submitButton.addEventListener('click', ()=>{
  postFormData();
});