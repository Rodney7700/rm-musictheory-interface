/**************
 * Music Theory (Interface) - Controller - Key Functions 
 */

export const getIndex = (req, res, next) => {
  res.render('pages/keyfunctions', {
    pageTitle: 'Music Theory - Key Functions',
    path: '/keyunctions' 
  });
}