/**************
 * Music Theory (Interface) - Controller - Chord By Harmonic Function 
 */

export const getHarmonicFuncInput = (req, res, next) => {
  const defaultChordFunction = 'Tonic';
  const defaultMajorKey = 'C Major';
  const majorKeyOptions = [ 'C Major', 'G Major', 'D Major', 'A Major', 'E Major', 'B Major',
                            'C\u266D Major (Enharmonic)', 'F\u266F Major', 'G\u266D Major (Enharmonic)',
                            'C\u266F Major (Enharmonic)', 'D\u266D Major', 'A\u266D Major', 'E\u266D Major',
                            'B\u266D Major', 'F Major' ];
  const majorKeyValues = [ 'C', 'G', 'D', 'A', 'E', 'B', 'Cb', 'F#', 'Gb', 'C#', 'Db', 'Ab', 'Eb', 'Bb', 'F' ];
  const majorChordFunctionOptions = [ 'Tonic', 'Tonic 7th', 'Supertonic', 'Supertonic 7th', 'Mediant',
                                      'Mediant 7th', 'Subdominant', 'Subdominant 7th', 'Dominant', 'Dominant 7th',
                                      'Submediant', 'Submediant 7th', 'Leading Note', 'Leading Note 7th' ];
  const defaultMinorKey = 'A Minor';
  const minorKeyOptions = [ 'A Minor', 'E Minor', 'B Minor', 'F\u266F Minor', 'C\u266F Minor', 'G\u266F Minor',
                            'A\u266D Minor (Enharmonic)', 'D\u266F Minor', 'E\u266D Minor (Enharmonic)',
                            'A\u266F Minor (Enharmonic)', 'B\u266D Minor', 'F Minor', 'C Minor',
                            'G Minor', 'D Minor' ];
  const minorKeyValues = [ 'a', 'e', 'b', 'f#', 'c#', 'g#', 'ab', 'd#', 'eb', 'a#', 'bb', 'f', 'c', 'g', 'd' ];  
  const minorChordFunctionOptions = [ 'Tonic', 'Tonic 7th', 'Supertonic', 'Supertonic 7th', 'Mediant',
                                      'Mediant 7th', 'Subdominant', 'Subdominant 7th', 'Dominant', 'Dominant 7th',
                                      'Submediant', 'Submediant 7th', 'Subtonic', 'Subtonic 7th' ];
  const chordFunctionValues = [ 'tonic', 'tonic7', 'supertonic', 'supertonic7', 'mediant', 'mediant7',
                                'subdominant', 'subdominant7', 'dominant', 'dominant7', 'submediant',
                                'submediant7', 'subtonic', 'subtonic7' ];
  
  res.render('pages/harmonicfunc', {
    pageTitle: 'Chord By Harmonic Function',
    path: '/harmonicfunc',
    defaultChordFunction: defaultChordFunction,
    defaultMajorKey: defaultMajorKey,
    majorKeyOptions: majorKeyOptions,
    majorKeyValues: majorKeyValues,
    defaultMinorKey: defaultMinorKey,
    minorKeyOptions: minorKeyOptions,
    minorKeyValues: minorKeyValues,
    majorChordFunctionOptions: majorChordFunctionOptions,
    minorChordFunctionOptions: minorChordFunctionOptions,
    chordFunctionValues: chordFunctionValues
  });
}