/**************
 * Music Theory (Interface) - Routes - Key Functions 
 */

// Third Party Modules
import Express from 'express';

// Chord Functions
import * as keyFunctionsController from '../controllers/keyfunctions.mjs';
import * as notesInKeyController from '../controllers/notesinkey.mjs';
import * as relativeMinorKeyController from '../controllers/relativeminorkey.mjs';
import * as relativeMajorKeyController from '../controllers/relativemajorkey.mjs';
import * as chordHarmonicFuncionController from '../controllers/harmonicfunc.mjs';
 
const router = Express.Router();

router.get('/keyfunctions', keyFunctionsController.getIndex);
router.get('/notesinkey', notesInKeyController.getNotesInKeyInput);
router.get('/relativeminorkey', relativeMinorKeyController.getMajorKeyInput);
router.get('/relativemajorkey', relativeMajorKeyController.getMinorKeyInput);
router.get('/harmonicfunc', chordHarmonicFuncionController.getHarmonicFuncInput);

export { router as routes };