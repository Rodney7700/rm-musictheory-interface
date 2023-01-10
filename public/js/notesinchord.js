/**************
 * Music Theory (Interface) - AJAX - Notes In Chord 
 */

const submitButton = document.getElementById('notesinchord');
const advancedChordOptions = document.getElementById('advancedchordoptions');
const advancedChordSelections = document.getElementsByName('advancedchord');

function showHideAdvancedOptions() { 
   
  const slashOptionDisplayStatus = document.getElementById('slashchord');
  const polychordOptionDisplayStatus = document.getElementById('polychord');
  
  if (advancedChordSelections[0].checked) {
    slashOptionDisplayStatus.style.display = 'none';
    polychordOptionDisplayStatus.style.display = 'none';
  }

  if (advancedChordSelections[1].checked) {
    slashOptionDisplayStatus.style.display = 'block';
    polychordOptionDisplayStatus.style.display = 'none';
  }

  if (advancedChordSelections[2].checked) {
    slashOptionDisplayStatus.style.display = 'none';
    polychordOptionDisplayStatus.style.display = 'block';
  }
}

function createMainChordNoteList(mainChordNotes) {
  // Create <ul> for the Chord Notes received in response
  const mainChordNotesUL = document.createElement('ul');

  for (let i = 0; i < mainChordNotes.length; i++) {
    const mainChordNoteLI = document.createElement('li');

    mainChordNoteLI.innerHTML = mainChordNotes[i].replace(/_/g, 'm')
                                                 .replace(/M/g, '&#8710;')
                                                 .replace(/#/g, '&#9839;')
                                                 .replace(/bb/g, '&#9837;&#9837;')
                                                 .replace(/b/g, '&#9837;')
                                                 .replace(/N/g, '&#9838;');

    // Assign a class name to the <li> created
    mainChordNoteLI.className = 'li__note';
    
    // append chord name list to chordNameUL
    mainChordNotesUL.appendChild(mainChordNoteLI);
  }

  // Assign a class name to the <ul> created
  mainChordNotesUL.className = 'u-display-flex';

  return mainChordNotesUL;  
}

function createChordDividerUL() {
  // Create <ul> for the Chord Divider
  const chordDividerUL = document.createElement('ul');
  const chordDividerLI = document.createElement('li');
  chordDividerLI.innerHTML = '|';
  chordDividerUL.appendChild(chordDividerLI);
  chordDividerUL.className = 'li__divider u-display-flex';

  return chordDividerUL;
}

function createSecondChordNoteList(secondChordNotes) {  
  // Create <ul> for the Second Chord Notes received in response
  const secondChordNotesUL = document.createElement('ul');

  for (let i = 0; i < secondChordNotes.length; i++) {
    const secondChordNoteLI = document.createElement('li');

    secondChordNoteLI.innerHTML = secondChordNotes[i].replace(/_/g, 'm')
                                                     .replace(/M/g, '&#8710;')
                                                     .replace(/#/g, '&#9839;')
                                                     .replace(/bb/g, '&#9837;&#9837;')
                                                     .replace(/b/g, '&#9837;')
                                                     .replace(/N/g, '&#9838;');

    // Assign a class name to the <li> created
    secondChordNoteLI.className = 'li__note';
    
    // append chord name list to chordNameUL
    secondChordNotesUL.appendChild(secondChordNoteLI);
  }

  // Assign a class name to the <ul> created
  secondChordNotesUL.className = 'u-display-flex';

  return secondChordNotesUL;  
}

function createCommentsList(comments) {
  // Create <ul> for the Comments received in response
  const commentsUL = document.createElement('ul');

  for (let i = 0; i < comments.length; i++) {
    const commentLI = document.createElement('li');

    commentLI.innerHTML = comments[i];

    // Assign a class name to the <li> created
    commentLI.className = 'li__name';

    // append chord name list to chordNameUL
    commentsUL.appendChild(commentLI);
  }

  return commentsUL;
}

function displayResult(data) {
  const chordNotes = data.notes;
  const comments = data.comments;
  const chordNotesDIV = document.getElementById('chord-notes');
  const commentsDIV = document.getElementById('comments');
  let commentsUL = null;
  const pipeIndex = chordNotes.indexOf('|');
  
  // Divide up notes if polychord detected
  let mainChordNotes = [];
  let secondChordNotes = [];

  if (pipeIndex === -1) {
    mainChordNotes = chordNotes;
  }

  if (pipeIndex !== -1) {
    mainChordNotes = chordNotes.slice(0,pipeIndex);
    secondChordNotes = chordNotes.slice(pipeIndex + 1);
  }
  
  // Create <ul> for the Main Chord Notes received in response
  const mainChordNotesUL = createMainChordNoteList(mainChordNotes);
  let chordDividerUL = '';
  let secondChordNotesUL = '';

  if (pipeIndex !== -1) {
    // Create <ul> for the Chord Divider
    chordDividerUL = createChordDividerUL();

    // Create <ul> for the Second Chord Notes received in response
    secondChordNotesUL = createSecondChordNoteList(secondChordNotes);
  }

  // Create commentsUL if there was a comment
  if (comments.length !== 0) {
    commentsUL = createCommentsList(comments);
  }

  // clear contents of chordNotesDIV
  chordNotesDIV.innerHTML = '';

  chordNotesDIV.className = 'u-display-flex';

  // append applicable ULs to chordNotesDIV
  chordNotesDIV.appendChild(mainChordNotesUL);
  if (secondChordNotesUL !== '') {
    chordNotesDIV.appendChild(chordDividerUL);
    chordNotesDIV.appendChild(secondChordNotesUL);
  }

  // clear contents of commentsDIV
  commentsDIV.innerHTML = '';

  // If result came with a comment
  if (commentsUL !== null) {
    commentsDIV.appendChild(commentsUL);
  }
}

function getFormData() {
  const chordRootNotes = document.getElementsByName('chordroot');
  const chordTypes = document.getElementById('chordtypes');
  const slashChordBassNotes = document.getElementsByName('slashbass');
  const secondChordRootNotes = document.getElementsByName('secondchordroot');
  const secondChordTypes = document.getElementById('secondchordtypes');

  let formDataObject = {};
  let chordNameShort = '';
  let chordRootNote = '';
  let chordType = '';
  let slashChordBassNote = '';
  let secondChordRootNote = '';
  let secondChordType = '';
  
  for (let i = 0; i < chordRootNotes.length; i++) {
    if (chordRootNotes[i].checked) {
      chordRootNote = chordRootNotes[i].value;
    }
  }

  chordType = chordTypes.options[chordTypes.selectedIndex].value;

  if (advancedChordSelections[0].checked) {   // none
    chordNameShort = `${chordRootNote}${chordType}`;
  }

  if (advancedChordSelections[1].checked) { // slash
    for (let i = 0; i < slashChordBassNotes.length; i++) {
      if (slashChordBassNotes[i].checked) {
        slashChordBassNote = slashChordBassNotes[i].value;
      }
    }
    
    chordNameShort = `${chordRootNote}${chordType}/${slashChordBassNote}`;
  }

  if (advancedChordSelections[2].checked) { // poly
    for (let i = 0; i < secondChordRootNotes.length; i++) {
      if (secondChordRootNotes[i].checked) {
        secondChordRootNote = secondChordRootNotes[i].value;
      }
    }
    
    secondChordType = secondChordTypes.options[secondChordTypes.selectedIndex].value;

    chordNameShort = `${chordRootNote}${chordType}|${secondChordRootNote}${secondChordType}`;
  }

  formDataObject.chordNameShort = chordNameShort;

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

  postData('http://localhost:8080/notesinchord', dataToSubmit)
  .then((data) => {    
    displayResult(data);    
  })
  .catch( error => {
    console.error('Error: ', error);
  });
}

advancedChordOptions.addEventListener('click', ()=>{
  showHideAdvancedOptions();
});

submitButton.addEventListener('click', ()=>{
  postFormData();
});