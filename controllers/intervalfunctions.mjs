/**************
 * Music Theory (Interface) - Controller - Interval Functions 
 */

export const getIndex = (req, res, next) => {
  res.render('pages/intervalfunctions', {
    pageTitle: 'Music Theory - Interval Functions',
    path: '/intervalfunctions' 
  });
}