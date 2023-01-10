/**************
 * Music Theory (Interface) - Controller - Name A Chord 
 */

export const getChordsInput = (req, res, next) => {
  const checkedNotes = [ 'C', 'E', 'G', 'Bb' ];
  const chordNoteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                             'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const chordNoteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                            'A', 'A#', 'Bb', 'B' ];
  
  res.render('pages/namechord', {
    pageTitle: 'Music Theory - Name A Chord',
    path: '/namechord',
    checkedNotes: checkedNotes,
    chordNoteOptions: chordNoteOptions,
    chordNoteValues: chordNoteValues
  });
}