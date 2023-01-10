/**************
 * Music Theory (Interface) - AJAX - Notes In Scale 
 */

const submitButton = document.getElementById('notesinscale');

function createScaleNotesAscendingList(scaleNotesAscending) {
  // Create <ul> for the Scale Notes (Ascending) received in response
  const scaleNotesAscendingUL = document.createElement('ul');

  for (let i = 0; i < scaleNotesAscending.length; i++) {
    const scaleNotesAscendingLI = document.createElement('li');

    scaleNotesAscendingLI.innerHTML = scaleNotesAscending[i].replace(/_/g, 'm')
                                                            .replace(/M/g, '&#8710;')
                                                            .replace(/#/g, '&#9839;')
                                                            .replace(/bb/g, '&#9837;&#9837;')
                                                            .replace(/b/g, '&#9837;')
                                                            .replace(/N/g, '&#9838;');

    // Assign a class name to the <li> created
    scaleNotesAscendingLI.className = 'li__note';
    
    // append chord name list to chordNameUL
    scaleNotesAscendingUL.appendChild(scaleNotesAscendingLI);
  }

  // Assign a class name to the <ul> created
  scaleNotesAscendingUL.className = 'u-display-flex';

  return scaleNotesAscendingUL;  
}

function createScaleNotesDescendingList(scaleNotesDescending) {
  // Create <ul> for the Scale Notes (Descending) received in response
  const scaleNotesDescendingUL = document.createElement('ul');

  for (let i = 0; i < scaleNotesDescending.length; i++) {
    const scaleNotesDescendingLI = document.createElement('li');

    scaleNotesDescendingLI.innerHTML = scaleNotesDescending[i].replace(/_/g, 'm')
                                                              .replace(/M/g, '&#8710;')
                                                              .replace(/#/g, '&#9839;')
                                                              .replace(/bb/g, '&#9837;&#9837;')
                                                              .replace(/b/g, '&#9837;')
                                                              .replace(/N/g, '&#9838;');

    // Assign a class name to the <li> created
    scaleNotesDescendingLI.className = 'li__note';
    
    // append chord name list to chordNameUL
    scaleNotesDescendingUL.appendChild(scaleNotesDescendingLI);
  }

  // Assign a class name to the <ul> created
  scaleNotesDescendingUL.className = 'u-display-flex';

  return scaleNotesDescendingUL;  
}

function displayResult(data) {
  const scaleNotesAscending = data.ascending;
  const scaleNotesDescending = data.descending;
  const scaleNotesAscendingDIV = document.getElementById('scale-notes-ascending');
  const scaleNotesDescendingDIV = document.getElementById('scale-notes-descending');

  // Create <h2> and <ul> for the Scale Notes (Ascending) received in response
  const scaleNotesAscendingUL = createScaleNotesAscendingList(scaleNotesAscending);

  // Create <ul> for the Scale Notes (Descending) received in response
  const scaleNotesDescendingUL = createScaleNotesDescendingList(scaleNotesDescending)

  // Clear contents of scaleNotesAscendingDIV and scaleNotesDescendingDIV
  scaleNotesAscendingDIV.innerHTML = '';
  scaleNotesAscendingDIV.className = 'u-display-flex';

  scaleNotesDescendingDIV.innerHTML = '';
  scaleNotesDescendingDIV.className = 'u-display-flex';

  // Append ULs
  scaleNotesAscendingDIV.appendChild(scaleNotesAscendingUL);
  scaleNotesDescendingDIV.appendChild(scaleNotesDescendingUL);
}

function getFormData() {
  const scaleRootNotes = document.getElementsByName('scaleroot');
  const scaleTypes = document.getElementById('scaletypes');
  const scaleOctaves = document.getElementsByName('octaves');

  let formDataObject = {};
  let scaleRootNote = '';
  let scaleType = '';
  let octaves = 1;
  
  for (let i = 0; i < scaleRootNotes.length; i++) {
    if (scaleRootNotes[i].checked) {
      scaleRootNote = scaleRootNotes[i].value;
    }
  }

  for (let i = 0; i < scaleOctaves.length; i++) {
    if (scaleOctaves[i].checked) {
      octaves = parseInt(scaleOctaves[i].value, 10);
    }
  }

  scaleType = scaleTypes.options[scaleTypes.selectedIndex].value;

  formDataObject.rootNote = scaleRootNote;
  formDataObject.scaleName = scaleType;
  formDataObject.octaves = octaves;

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

  postData('http://localhost:8080/notesinscale', dataToSubmit)
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