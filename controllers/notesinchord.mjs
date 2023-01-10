/**************
 * Music Theory (Interface) - Controller - Notes In Chord 
 */

export const getNotesInChordInput = (req, res, next) => {
  const chordRootNote = 'C';
  const secondChordRoot = 'C';
  const slashChordBass = 'C';
  const chordType = 'Major';
  const chordNoteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                             'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const chordNoteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                            'A', 'A#', 'Bb', 'B' ];
  const chordTypeOptions = [ 'Flat Five', 'Power', 'Suspended Second', 'Diminished', 'Minor',
                           'Minor Sharp Five', 'Major Flat Five', 'Major', 'Augmented', 'Suspended',
                           'Dominant Ninth Suspended Second', 'Minor Add Four', 'Diminished Seventh',
                           'Half Diminished Seventh', 'Diminished Major Seventh', 'Minor Sixth',
                           'Minor Seventh', 'Minor Major Seventh', 'Minor Seventh Sharp Five',
                           'Add Four', 'Dominant Seventh Flat Five', 'Major Sixth', 'Dominant Seventh',
                           'Major Seventh', 'Dominant Seventh Sharp Five', 'Major Seventh Sharp Five',
                           'Dominant Seventh Flat Five Flat Nine', 'Dominant Seventh Flat Nine',
                           'Dominant Seventh Sharp Five Flat Nine', 'Diminished Six Nine',
                           'Minor Six Nine', 'Minor Ninth', 'Minor Major Ninth', 'Dominant Ninth Flat Five',
                           'Six Nine', 'Dominant Ninth', 'Major Ninth', 'Dominant Ninth Sharp Five',
                           'Major Ninth Sharp Five', 'Dominant Nine Eleven Suspended Second',
                           'Dominant Seventh Flat Five Sharp Nine', 'Dominant Seventh Sharp Nine',
                           'Dominant Seventh Sharp Five Sharp Nine', 'Half Diminished Seventh Add Four',
                           'Minor Six Eleven', 'Minor Eleventh Sharp Five', 'Diminished Major Thirteenth',
                           'Dominant Seventh Sharp Eleven', 'Major Seventh Sharp Eleven', 
                           'Dominant Eleventh Suspended Add Six', 'Minor Six Nine Add Four',
                           'Minor Eleventh', 'Minor Major Eleventh', 'Minor Six Nine Add Flat Five',
                           'Six Nine Add Four', 'Dominant Eleventh', 'Major Eleventh', 'Six Nine Add Flat Five',
                           'Major Ninth Add Flat Five', 'Dominant Thirteenth Suspended Second',
                           'Minor Thirteenth', 'Minor Major Thirteenth', 'Dominant Thirteenth',
                           'Major Thirteenth' ];
const chordTypeValues = [ 'b5', '5', 'sus2', '°', '_', '_#5', 'Δ(b5)', 'Δ', '+', 'sus4',
                          '9sus2', '_ add(4)', '°7', 'ø7', '°Δ7', '_6', '_7', '_Δ7', '_7#5',
                          'Δ add(4)', '7(b5)', 'Δ6', '7', 'Δ7', '7(#5)', 'Δ7#5', '7b5(b9)',
                          '7(b9)', '7(#5)b9', '°6/9', '_6/9', '_9', '_Δ9', '9b5', '6/9',
                          '9', 'Δ9', '9(#5)', 'Δ9#5', '9/11sus2', '7b5(#9)', '7(#9)', '7(#5)#9',
                          'ø7 add(4)', '_6/11', '_11#5', '°Δ13', '7(#11)', 'Δ7(#11)', '11sus4 add(6)',
                          '_6/9 add(4)', '_11', '_Δ11', '_6/9 add(b5)', '6/9 add(4)', '11', 'Δ11',
                          '6/9 add(b5)', 'Δ9 add(b5)', '13sus2', '_13', '_Δ13', '13', 'Δ13' ];
  
  res.render('pages/notesinchord', {
    pageTitle: 'Notes In Chord',
    path: '/notesinchord',
    chordRootNote: chordRootNote,
    chordType: chordType,
    chordNoteOptions: chordNoteOptions,
    chordNoteValues: chordNoteValues,
    chordTypeOptions: chordTypeOptions,
    chordTypeValues: chordTypeValues,
    secondChordRoot: secondChordRoot,
    slashChordBass: slashChordBass
  });
}