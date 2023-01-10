/**************
 * Music Theory (Interface) - Controller - Home Page 
 */

export const getIndex = (req, res, next) => {
  res.render('pages/index', {
    pageTitle: 'Music Theory - Home',
    path: '/' 
  });
}