/**************
 * Music Theory (Interface) - Controller - Relative Major Key 
 */

export const getMinorKeyInput = (req, res, next) => {
  const defaultMinorKey = 'A Minor';
  const minorKeyOptions = [ 'A Minor', 'E Minor', 'B Minor', 'F\u266F Minor', 'C\u266F Minor', 'G\u266F Minor',
                            'A\u266D Minor (Enharmonic)', 'D\u266F Minor', 'E\u266D Minor (Enharmonic)',
                            'A\u266F Minor (Enharmonic)', 'B\u266D Minor', 'F Minor', 'C Minor',
                            'G Minor', 'D Minor' ];
  const minorKeyValues = [ 'a', 'e', 'b', 'f#', 'c#', 'g#', 'ab', 'd#', 'eb', 'a#', 'bb', 'f', 'c', 'g', 'd' ];
  
  res.render('pages/relativemajorkey', {
    pageTitle: 'Relative Major Key',
    path: '/relativemajorkey',
    defaultMinorKey: defaultMinorKey,
    minorKeyOptions: minorKeyOptions,
    minorKeyValues: minorKeyValues
  });
}