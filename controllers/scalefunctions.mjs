/**************
 * Music Theory (Interface) - Controller - Scale Functions 
 */

export const getIndex = (req, res, next) => {
  res.render('pages/scalefunctions', {
    pageTitle: 'Music Theory - Scale Functions',
    path: '/scalefunctions' 
  });
}