/**************
 * Music Theory (Interface) - Controller - Interval Between Notes 
 */

export const getNotesInput = (req, res, next) => {
  const defaultNote = 'C';
  const noteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                        'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const noteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                       'A', 'A#', 'Bb', 'B' ];
    
  res.render('pages/intervalbetween', {
    pageTitle: 'Interval Between Notes',
    path: '/intervalbetween',
    defaultNote: defaultNote,
    noteOptions: noteOptions,
    noteValues: noteValues
  });
}