/**************
 * Music Theory (Interface) - AJAX - Name A Chord 
 */

const submitButton = document.getElementById('namechord');

function notesArrayFilter(userNotesInput, enharmonic) {
  
  if (userNotesInput.includes('C#') && userNotesInput.includes('Db')) {
    if ( enharmonic === 'sharp' ) {
      let index = userNotesInput.indexOf('Db');
      userNotesInput.splice(index, 1);
    }
  
    if ( enharmonic === 'flat' ) {
      let index = userNotesInput.indexOf('C#');
      userNotesInput.splice(index, 1);
    }
  }

  if (userNotesInput.includes('D#') && userNotesInput.includes('Eb')) {
    if ( enharmonic === 'sharp' ) {
      let index = userNotesInput.indexOf('Eb');
      userNotesInput.splice(index, 1);
    }
  
    if ( enharmonic === 'flat' ) {
      let index = userNotesInput.indexOf('D#');
      userNotesInput.splice(index, 1);
    }
  }

  if (userNotesInput.includes('F#') && userNotesInput.includes('Gb')) {
    if ( enharmonic === 'sharp' ) {
      let index = userNotesInput.indexOf('Gb');
      userNotesInput.splice(index, 1);
    }
  
    if ( enharmonic === 'flat' ) {
      let index = userNotesInput.indexOf('F#');
      userNotesInput.splice(index, 1);
    }
  }

  if (userNotesInput.includes('G#') && userNotesInput.includes('Ab')) {
    if ( enharmonic === 'sharp' ) {
      let index = userNotesInput.indexOf('Ab');
      userNotesInput.splice(index, 1);
    }
  
    if ( enharmonic === 'flat' ) {
      let index = userNotesInput.indexOf('G#');
      userNotesInput.splice(index, 1);
    }
  }

  if (userNotesInput.includes('A#') && userNotesInput.includes('Bb')) {
    if ( enharmonic === 'sharp' ) {
      let index = userNotesInput.indexOf('Bb');
      userNotesInput.splice(index, 1);
    }
  
    if ( enharmonic === 'flat' ) {
      let index = userNotesInput.indexOf('A#');
      userNotesInput.splice(index, 1);
    }
  } 

  return userNotesInput;
}

function createChordNameList(chordNames) {
  // RegEx for character replacement
  const regexpMajor = /M([1-7])/g;
  const regexpUnderscore = /_([1-7])/g;
  const regexpSharp = /#([1-7])/g;
  const regexpFlat = /b([1-7])/g;
  const regexpDoubleFlat = /bb([1-7])/g;
  const regexpNatural = /N([1-7])/g;
  
  function replaceMajor(match, p1) {
    return `&#8710;${p1}`;
  }

  function replaceUnderscore(match, p1) {
    return `m${p1}`; 
  }  
  
  function replaceSharp(match, p1) {
    return `&#9839;${p1}`; 
  }
  
  function replaceFlat(match, p1) {
    return `&#9837;${p1}`; 
  }
  
  function replaceDoubleFlat(match, p1) {
    return `&#9837;&#9837;${p1}`; 
  }
  
  function replaceNatural(match, p1) {
    return `&#9838;${p1}`; 
  }

  // Create output element from request response received
  const chordNamesUL = document.createElement('ul');

  for (let i = 0; i < chordNames.length; i++) {
    const chordNameLI = document.createElement('li');
    
    // Need to regex with /g to replace all character instances
    chordNameLI.innerHTML = chordNames[i].replace(regexpUnderscore,  replaceUnderscore)
                                         .replace(regexpMajor,  replaceMajor)
                                         .replace(regexpSharp, replaceSharp)
                                         .replace(regexpDoubleFlat, replaceDoubleFlat)
                                         .replace(regexpFlat, replaceFlat)
                                         .replace(regexpNatural, replaceNatural);
    
    // Assign a class name to the <li> created
    chordNameLI.className = 'li__name';

    // append chord name list to chordNameUL
    chordNamesUL.appendChild(chordNameLI);
  }

  return chordNamesUL;
}  

function displayResult(data) {
  const chordNames = (data.length !== 0) ? data : [ 'No Chord Found' ];
  const chordNamesDIV = document.getElementById('chord-names');

  // Create output element from request response received
  const chordNamesUL = createChordNameList(chordNames);

  // clear contents of chordNamesDIV
  chordNamesDIV.innerHTML = '';

  // append chordNamesUL to chordNamesDIV
  chordNamesDIV.appendChild(chordNamesUL);
}

function getFormData() {
  const notes = document.getElementsByName('note');
  const enharmonicSharpSelected = document.getElementById('sharp').checked;

  let formDataObject = {};
  let notesArray = [];
  let enharmonic = 'sharp';
  let useShorthand = false;
  let omitInversions = false;

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].checked) {
      notesArray.push(notes[i].value);
    }
  }

  enharmonic = enharmonicSharpSelected ? 'sharp' : 'flat';

  if (document.getElementById('use_shorthand').checked) {
    useShorthand = true;
  }

  if (document.getElementById('omit_inversions').checked) {
    omitInversions = true;
  }

  formDataObject.notes = notesArray;
  formDataObject.enharmonic = enharmonic;
  formDataObject.useShorthand = useShorthand;
  formDataObject.omitInversions = omitInversions;

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
  return response.json();
}

function postFormData() {
  // The click event handler that starts the process of:
  //  (1) Getting the user data from the page
  //  (2) Cleaning up any data as required
  //  (3) Generating the HTML to display the response from the server
  
  let userSelections = getFormData();
  let dataToSubmit = {}; 

  let filteredArray = notesArrayFilter(userSelections.notes, userSelections.enharmonic);

  dataToSubmit.notes = filteredArray;
  dataToSubmit.useShorthand = userSelections.useShorthand;
  dataToSubmit.omitInversions = userSelections.omitInversions;

  postData('http://localhost:8080/namechord', dataToSubmit)
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