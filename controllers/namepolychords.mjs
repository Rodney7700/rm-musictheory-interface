/**************
 * Music Theory (Interface) - Controller - Name Polychords 
 */

export const getNotesInPolyChordInput = (req, res, next) => {
  const selectedNote1 = 'C';
  const selectedNote2 = 'E';
  const selectedNote3 = 'G';
  const additionalNote = '*';
  const chordNoteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                             'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const chordNoteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                            'A', 'A#', 'Bb', 'B' ];
  const additionalChordNoteOptions = [ '*', 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F',
                                       'F\u266F', 'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F',
                                       'B\u266D', 'B' ];
  const additionalChordNoteValues = [ 'none', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                                     'A', 'A#', 'Bb', 'B' ];
  
  res.render('pages/namepolychords', {
    pageTitle: 'Music Theory - Name Polychords',
    path: '/namepolychords',
    selectedNote1: selectedNote1,
    selectedNote2: selectedNote2,
    selectedNote3: selectedNote3,
    additionalNote: additionalNote,
    chordNoteOptions: chordNoteOptions,
    chordNoteValues: chordNoteValues,
    additionalChordNoteOptions: additionalChordNoteOptions,
    additionalChordNoteValues: additionalChordNoteValues

  });
}