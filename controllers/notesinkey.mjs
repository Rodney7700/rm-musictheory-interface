/**************
 * Music Theory (Interface) - Controller - Notes In Key 
 */

export const getNotesInKeyInput = (req, res, next) => {
  const defaultKey = 'C Major';
  const keyOptions = [ 'C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major',
                           'C\u266D Major (Enharmonic)', 'F\u266F Major', 'G\u266D Major (Enharmonic)',
                           'C# Major (Enharmonic)', 'D\u266D Major', 'A\u266D Major', 'E\u266D Major',
                           'B\u266D Major', 'F Major', 'A Minor', 'E Minor', 'B Minor', 'F\u266F Minor',
                           'C\u266F Minor', 'G\u266F Minor', 'A\u266D Minor (Enharmonic)', 'D\u266F Minor',
                           'E\u266D Minor (Enharmonic)', 'A\u266F Minor (Enharmonic)', 'B\u266D Minor',
                           'F Minor', 'C Minor', 'G Minor', 'D Minor' ];
  const keyValues = [ 'C', 'G', 'D', 'A', 'E', 'B', 'Cb', 'F#', 'Gb', 'C#', 'Db', 'Ab', 'Eb', 'Bb', 'F',
                          'a', 'e', 'b', 'f#', 'c#', 'g#', 'ab', 'd#', 'eb', 'a#', 'bb', 'f', 'c', 'g', 'd' ];
  
  res.render('pages/notesinkey', {
    pageTitle: 'Notes In Key',
    path: '/notesinkey',
    defaultKey: defaultKey,
    keyOptions: keyOptions,
    keyValues: keyValues
  });
}