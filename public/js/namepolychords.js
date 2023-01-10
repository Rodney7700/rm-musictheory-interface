/**************
 * Music Theory (Interface) - AJAX - Name Polychords
 */

const submitButton = document.getElementById('namepolychords');

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

function createPolyChordNameList(polyChordNames) {
  // RegEx for character replacement
  const regexpMajor = /M([1-7])/g;
  const regexpUnderscore = /_([1-7]|[Δ])/g;
  const regexpSharp = /#([1-7]|[Δ]|[_]|[M]|[m])/g;
  const regexpFlat = /b([1-7]|[Δ]|[_]|[M]|[m])/g;
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

  // Internal helper function
  function removeDuplicates(array) {
    return array.filter((item, index) => array.indexOf(item) === index);
  }

  // Remove duplicate polychord names
  polyChordNames = removeDuplicates(polyChordNames);

  // Create output element from request response received
  const polyChordNamesUL = document.createElement('ul');

  for (let i = 0; i < polyChordNames.length; i++) {
    const polyChordNameLI = document.createElement('li');

    polyChordNameLI.innerHTML = polyChordNames[i].replace(regexpUnderscore,  replaceUnderscore)
                                                 .replace(regexpMajor,  replaceMajor)
                                                 .replace(regexpSharp, replaceSharp)
                                                 .replace(regexpDoubleFlat, replaceDoubleFlat)
                                                 .replace(regexpFlat, replaceFlat)
                                                 .replace(regexpNatural, replaceNatural);
    
    // Assign a class name to the <li> created
    polyChordNameLI.className = 'li__name';

    // append chord name list to chordNameUL
    polyChordNamesUL.appendChild(polyChordNameLI);
  }

  return  polyChordNamesUL;
}

function displayResult(data) {
  const polyChordNames = (data.length !== 0) ? data : [ 'No Polychord Found' ];
  const polyChordNamesDIV = document.getElementById('polychord-names');

  // Create output element from request response received
  const polyChordNamesUL = createPolyChordNameList(polyChordNames);

  // clear contents of polyChordNamesDIV
  polyChordNamesDIV.innerHTML = '';

  // append chordNamesUL to polyChordNamesDIV
  polyChordNamesDIV.appendChild(polyChordNamesUL);
}

function getFormData() {
  const note1 = document.getElementById('note1');
  const note2 = document.getElementById('note2');
  const note3 = document.getElementById('note3');
  const note4 = document.getElementById('note4');
  const note5 = document.getElementById('note5');
  const note6 = document.getElementById('note6');
  const note7 = document.getElementById('note7');
  const note8 = document.getElementById('note8');
  const note9 = document.getElementById('note9');
  const note10 = document.getElementById('note10');
  const note11 = document.getElementById('note11');
  const note12 = document.getElementById('note12');
  const note13 = document.getElementById('note13');
  const note14 = document.getElementById('note14');
  let selectedNotesArray = [ note1.options[note1.selectedIndex].value,
                             note2.options[note2.selectedIndex].value,
                             note3.options[note3.selectedIndex].value,
                             note4.options[note4.selectedIndex].value,
                             note5.options[note5.selectedIndex].value,
                             note6.options[note6.selectedIndex].value,
                             note7.options[note7.selectedIndex].value,
                             note8.options[note8.selectedIndex].value,
                             note9.options[note9.selectedIndex].value,
                             note10.options[note10.selectedIndex].value,
                             note11.options[note11.selectedIndex].value,
                             note12.options[note12.selectedIndex].value,
                             note13.options[note13.selectedIndex].value,
                             note14.options[note14.selectedIndex].value
                           ];

  let enharmonic = document.getElementById('sharp').checked ? 'sharp' : 'flat'; 
  
  let formDataObject = {};
  let notesArray = [];
  
  for (let i = 0; i < 14; i++) {
    if (selectedNotesArray[i] !== 'none') {
      notesArray.push(selectedNotesArray[i]);
    }
  }

  formDataObject.notes = notesArray;
  formDataObject.enharmonic = enharmonic;

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

  postData('http://localhost:8080/namepolychords', dataToSubmit)
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