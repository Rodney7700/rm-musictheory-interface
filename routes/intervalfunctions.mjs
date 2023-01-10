/**************
 * Music Theory (Interface) - Routes - Interval Functions 
 */

// Third Party Modules
import Express from 'express';

// Scale Functions
import * as intervalFunctionsController from '../controllers/intervalfunctions.mjs';
import * as diatonicNoteInKeyController from '../controllers/diatonicnoteinkey.mjs';
import * as noteAtIntervalController from '../controllers/noteatinterval.mjs';
import * as intervalBetweenNotesController from '../controllers/intervalbetween.mjs';

const router = Express.Router();

router.get('/intervalfunctions', intervalFunctionsController.getIndex);
router.get('/diatonicnoteinkey', diatonicNoteInKeyController.getDiatonicNoteInKeyInput);
router.get('/noteatinterval', noteAtIntervalController.getNoteAtIntervalInput);
router.get('/intervalbetween', intervalBetweenNotesController.getNotesInput);

export { router as routes };