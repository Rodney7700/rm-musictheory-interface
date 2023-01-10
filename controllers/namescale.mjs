/**************
 * Music Theory (Interface) - Controller - Name Scale 
 */

export const getScaleInput = (req, res, next) => {
  const selectedNote1 = 'C';
  const selectedNote2 = 'E';
  const selectedNote3 = 'G';
  const additionalNote = '*';
  const scaleNoteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                             'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const scaleNoteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                            'A', 'A#', 'Bb', 'B' ];
  const additionalScaleNoteOptions = [ '*', 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F',
                                       'F\u266F', 'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F',
                                       'B\u266D', 'B' ];
  const additionalScaleNoteValues = [ 'none', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                                     'A', 'A#', 'Bb', 'B' ];
  
  res.render('pages/namescale', {
    pageTitle: 'Music Theory - Name A Scale',
    path: '/namescale',
    selectedNote1: selectedNote1,
    selectedNote2: selectedNote2,
    selectedNote3: selectedNote3,
    additionalNote: additionalNote,
    scaleNoteOptions: scaleNoteOptions,
    scaleNoteValues: scaleNoteValues,
    additionalScaleNoteOptions: additionalScaleNoteOptions,
    additionalScaleNoteValues: additionalScaleNoteValues

  });
}