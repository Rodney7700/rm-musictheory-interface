/**************
 * Music Theory (Interface) - Controller - Note At Interval 
 */

export const getNoteAtIntervalInput = (req, res, next) => {
  const defaultNote = 'C';
  const noteOptions = [ 'C', 'C\u266F', 'D\u266D', 'D', 'D\u266F', 'E\u266D', 'E', 'F', 'F\u266F',
                        'G\u266D', 'G', 'G\u266F', 'A\u266D', 'A', 'A\u266F', 'B\u266D', 'B' ];
  const noteValues = [ 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab',
                       'A', 'A#', 'Bb', 'B' ];
  const defaultIntervalName = 'Major Second';
  const intervalFunctionOptions = [ 'Major Unison', 'Minor Second', 'Major Second', 'Minor Third',
                                    'Major Third', 'Minor Fourth', 'Major Fourth', 'Perfect Fourth',
                                    'Minor Fifth', 'Major Fifth', 'Perfect Fifth', 'Minor Sixth',
                                    'Major Sixth', 'Minor Seventh', 'Major Seventh' ];
  const intervalFunctionValues = [ '1', 'b2', '2', 'b3', '3', 'b4', '4', '4', 'b5', '5',
                                   '5', 'b6', '6', 'b7', '7' ];    
  
  res.render('pages/noteatinterval', {
    pageTitle: 'Note At Interval',
    path: '/noteatinterval',
    defaultNote: defaultNote,
    noteOptions: noteOptions,
    noteValues: noteValues,
    defaultIntervalName: defaultIntervalName,
    intervalFunctionOptions: intervalFunctionOptions,
    intervalFunctionValues: intervalFunctionValues
  });
}