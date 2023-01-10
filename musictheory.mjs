/**************
 * Music Theory (Interface) - Application 
 */

// NodeJS Core Modules
import Path from 'path';
import URL from 'url';
import CORS from 'cors';
const __dirname = Path.dirname(URL.fileURLToPath(import.meta.url));

// Third Party Modules
import Express from 'express';

// Local Modules
import * as errorController from './controllers/error404.mjs'; // Import the error.js controller

// Home Routes
import * as homeRoutes from './routes/home.mjs';

// Keys Routes
import * as keyFunctionsRoutes from './routes/keyfunctions.mjs';

// Intervals Routes
import * as intervalFunctionsRoutes from './routes/intervalfunctions.mjs';

// Chords Routes
import * as chordFunctionsRoutes from './routes/chordfunctions.mjs';

// Scales Routes
import * as scaleFunctionsRoutes from './routes/scalefunctions.mjs';

// Application
const musicTheoryClient = Express(); // Create the app

musicTheoryClient.set('view engine', 'ejs'); // ejs templating engine supports express natively
musicTheoryClient.set('views', 'views'); // our project is using the default folder location for the views already, but this is where to change it if desired

musicTheoryClient.use(Express.urlencoded({extended: true})); // For parsing html requests 
musicTheoryClient.use(Express.static(Path.join(__dirname, 'public'))); // Allows sending static files from folder 'public'

let corsOptions = {
  'origin': '*',
  'methods': [ 'GET', 'POST' ],
  'allowedHeaders': [ 'Content-Type', 'Authorization' ], 
  'preflightContinue': false,
  'optionsSuccessStatus': 204
};
// This will apply the above CORS options on all routes
musicTheoryClient.use(CORS(corsOptions));

// Keys
musicTheoryClient.use(keyFunctionsRoutes.routes);

// Intervals
musicTheoryClient.use(intervalFunctionsRoutes.routes);

// Chords
musicTheoryClient.use(chordFunctionsRoutes.routes);

// Scales
musicTheoryClient.use(scaleFunctionsRoutes.routes);

// Home
musicTheoryClient.use(homeRoutes.routes);
musicTheoryClient.use(errorController.get404);

musicTheoryClient.listen(8000);