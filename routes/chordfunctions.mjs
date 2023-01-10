/**************
 * Music Theory (Interface) - Routes - Chord Functions 
 */

// Third Party Modules
import Express from 'express';

// Chord Functions
import * as chordFunctionsController from '../controllers/chordfunctions.mjs';
import * as nameChordController from '../controllers/namechord.mjs';
import * as notesInChordChordController from '../controllers/notesinchord.mjs';
import * as namePolyChordsController from '../controllers/namepolychords.mjs';
 
const router = Express.Router();

router.get('/chordfunctions', chordFunctionsController.getIndex);
router.get('/notesinchord', notesInChordChordController.getNotesInChordInput);
router.get('/namechord', nameChordController.getChordsInput);
router.get('/namepolychords', namePolyChordsController.getNotesInPolyChordInput);

export { router as routes };