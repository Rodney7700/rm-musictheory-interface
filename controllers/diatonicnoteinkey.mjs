/**************
 * Music Theory (Interface) - Controller - Diatonic Note In Key 
 */

export const getDiatonicNoteInKeyInput = (req, res, next) => {
  const defaultIntervalName = 'Diatonic Second';
  const diatonicFunctionOptions = [ 'Unison', 'Diatonic Second', 'Diatonic Third', 'Diatonic Fourth',
                                    'Diatonic Fifth', 'Diatonic Sixth', 'Diatonic Seventh' ];

  const diatonicFunctionValues = [ 'getUnison', 'getDiatonicSecond', 'getDiatonicThird', 'getDiatonicFourth',
                                   'getDiatonicFifth', 'getDiatonicSixth', 'getDiatonicSeventh' ];
  const defaultMajorKey = 'C Major';
  const majorKeyOptions = [ 'C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major',
                            'C\u266D Major (Enharmonic)', 'F\u266F Major', 'G\u266D Major (Enharmonic)',
                            'C\u266F Major (Enharmonic)', 'D\u266D Major', 'A\u266D Major', 'E\u266D Major',
                            'B\u266D Major', 'F Major' ];
  const majorKeyValues = [ 'C', 'G', 'D', 'A', 'E', 'B', 'Cb', 'F#', 'Gb', 'C#', 'Db', 'Ab', 'Eb', 'Bb', 'F' ];
  const defaultMinorKey = 'A Minor';
  const minorKeyOptions = [ 'A Minor', 'E Minor', 'B Minor', 'F\u266F Minor', 'C\u266F Minor', 'G\u266F Minor',
                            'A\u266D Minor (Enharmonic)', 'D\u266F Minor', 'E\u266D Minor (Enharmonic)',
                            'A\u266F Minor (Enharmonic)', 'B\u266D Minor', 'F Minor', 'C Minor',
                            'G Minor', 'D Minor' ];
  const minorKeyValues = [ 'a', 'e', 'b', 'f#', 'c#', 'g#', 'ab', 'd#', 'eb', 'a#', 'bb', 'f', 'c', 'g', 'd' ];
  const defaultNote = 'C';
  const noteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                        'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const noteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                       'A', 'A#', 'Bb', 'B' ];   
  
  res.render('pages/diatonicnoteinkey', {
    pageTitle: 'Diatonic Note In Key',
    path: '/diatonicnoteinkey',
    defaultIntervalName: defaultIntervalName,
    diatonicFunctionOptions: diatonicFunctionOptions,
    diatonicFunctionValues: diatonicFunctionValues,
    defaultMajorKey: defaultMajorKey,
    majorKeyOptions: majorKeyOptions,
    majorKeyValues: majorKeyValues,
    defaultMinorKey: defaultMinorKey,
    minorKeyOptions: minorKeyOptions,
    minorKeyValues: minorKeyValues,
    defaultNote: defaultNote,
    noteOptions: noteOptions,
    noteValues: noteValues
  });
}