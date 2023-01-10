/**************
 * Music Theory (Interface) - Controller - Chord Functions 
 */

export const getIndex = (req, res, next) => {
  res.render('pages/chordfunctions', {
    pageTitle: 'Music Theory - Chord Functions',
    path: '/chordfunctions' 
  });
}