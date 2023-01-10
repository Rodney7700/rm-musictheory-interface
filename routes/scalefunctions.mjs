/**************
 * Music Theory (Interface) - Routes - Scale Functions 
 */

// Third Party Modules
import Express from 'express';

// Scale Functions
import * as scaleFunctionsController from '../controllers/scalefunctions.mjs';
import * as notesInScaleController from '../controllers/notesinscale.mjs';
import * as nameScaleController from '../controllers/namescale.mjs';

const router = Express.Router();

router.get('/scalefunctions', scaleFunctionsController.getIndex);
router.get('/notesinscale', notesInScaleController.getNotesInScaleInput);
router.get('/namescale', nameScaleController.getScaleInput);

export { router as routes };