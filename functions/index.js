const functions = require('firebase-functions');
const app = require('express')();

// AUTH MIDDLEWARE
const FBAuth = require('./util/fbAuth');

// HANDLERS
const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signup, login, uploadImage } = require('./handlers/users');

// SCREAM ROUTES
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);

// USERS ROUTES
app.post('/signup', signup);
app.post('/login', login);
app.post('user/image', FBAuth, uploadImage);

// https://baseurl.com/api/
exports.api = functions.https.onRequest(app);
