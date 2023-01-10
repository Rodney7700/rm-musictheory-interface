/**************
 * Music Theory (Interface) - Controller - Relative Minor Key 
 */

export const getMajorKeyInput = (req, res, next) => {
  const defaultMajorKey = 'C Major';
  const majorKeyOptions = [ 'C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major',
                           'C\u266D Major (Enharmonic)', 'F\u266F Major', 'G\u266D Major (Enharmonic)',
                           'C\u266F Major (Enharmonic)', 'D\u266D Major', 'A\u266D Major', 'E\u266D Major',
                           'B\u266D Major', 'F Major' ];
  const majorKeyValues = [ 'C', 'G', 'D', 'A', 'E', 'B', 'Cb', 'F#', 'Gb', 'C#', 'Db', 'Ab', 'Eb', 'Bb', 'F' ];
  
  res.render('pages/relativeminorkey', {
    pageTitle: 'Relative Minor Key',
    path: '/relativeminorkey',
    defaultMajorKey: defaultMajorKey,
    majorKeyOptions: majorKeyOptions,
    majorKeyValues: majorKeyValues
  });
}