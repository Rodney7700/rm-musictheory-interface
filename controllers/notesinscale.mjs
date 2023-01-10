/**************
 * Music Theory (Interface) - Controller - Notes In Scale 
 */

export const getNotesInScaleInput = (req, res, next) => {
  const scaleRootNote = 'C';
  const scaleType = 'Major';
  const scaleOctaves = 1;
  const scaleNoteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                             'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const scaleNoteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                            'A', 'A#', 'Bb', 'B' ];
  const scaleTypeOptions = [ 'Major', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian',
                             'Locrian', 'Harmonic Major', 'Dorian \u266D5', 'Phrygian \u266D4', 'Lydian \u266D3',
                             'Mixolydian \u266D2', 'Lydian +\u266F2', 'Locrian \u266D\u266D7',
                             'Double Harmonic Major', 'Lydian \u266F2 \u266F6', 'Ultra Phrygian', 
                             'Hungarian Gypsy Minor', 'Oriental', 'Ionian \u266F2 \u266F5', 
                             'Locrian \u266D\u266D3 \u266D\u266D7', 'Natural Minor', 'Harmonic Minor', 'Locrian Major 6',
                             'Ionian \u266F5', 'Dorian \u266F4', 'Phrygian Major 3', 'Lydian \u266F2',
                             'Locrian \u266D4 \u266D\u266D7', 'Melodic Minor', 'Dorian \u266D2', 'Lydian +',
                             'Lydian \u266D7', 'Mixolydian \u266D6', 'Locrian \u266E2', 'SuperLocrian',
                             'Enigmatic', 'Neapolitan', 'Neapolitan Minor', 'Spanish', 'Arabian', 'Persian',
                             'Altered Dominant', 'Major Pentatonic', 'Minor Pentatonic', 'Japanese', 'Blues',
                             'Whole Tone 1', 'Whole Tone 2', 'Major Bebop', 'Dominant Bebop', 'Minor Bebop',
                             'Diminished', 'Dominant Diminished', 'Nine Tone' ]; 
 const scaleTypeValues = [ 'Major', 'Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian',
                           'Aeolian', 'Locrian', 'HarmonicMajor', 'DorianFlatFive', 'PhrygianFlatFour',
                           'LydianFlatThree', 'MixolydianFlatTwo', 'LydianAugmentedSharpTwo',
                           'LocrianDoubleFlatSeven', 'DoubleHarmonicMajor', 'LydianSharpTwoSharpSix',
                           'UltraPhrygian', 'HungarianGypsyMinor', 'Oriental', 'IonianSharpTwoSharpFive',
                           'LocrianDoubleFlatThreeDoubleFlatSeven', 'NaturalMinor', 'HarmonicMinor',
                           'LocrianMajorSix', 'IonianSharpFive', 'DorianSharpFour', 'PhrygianMajorThree',
                           'LydianSharpTwo', 'LocrianFlatFourDoubleFlatSeven', 'MelodicMinor', 'DorianFlatTwo',
                           'LydianAugmented', 'LydianFlatSeven', 'MixolydianFlatSix', 'LocrianNaturalTwo',
                           'SuperLocrian', 'Enigmatic', 'Neapolitan', 'NeapolitanMinor', 'Spanish', 'Arabian',
                           'Persian', 'AlteredDominant', 'MajorPentatonic', 'MinorPentatonic', 'Japanese', 'Blues',
                           'WholeTone1', 'WholeTone2', 'MajorBebop', 'DominantBebop', 'MinorBebop', 'Diminished',
                           'DominantDiminished', 'NineTone' ];
const octavesOptions = [ '1', '2' ];
const octavesValues = [ 1, 2 ];
  
  res.render('pages/notesinscale', {
    pageTitle: 'Notes In Scale',
    path: '/notesinscale',
    scaleRootNote: scaleRootNote,
    scaleType: scaleType,
    scaleOctaves: scaleOctaves,
    scaleNoteOptions: scaleNoteOptions,
    scaleNoteValues: scaleNoteValues,
    scaleTypeOptions: scaleTypeOptions,
    scaleTypeValues: scaleTypeValues,
    octavesOptions: octavesOptions,
    octavesValues: octavesValues
  });
}