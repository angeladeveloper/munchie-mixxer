const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();

const PORT = process.env.PORT || 3000;

require('dotenv').config();

//- MIDDLEWARE

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//// this makes it so we dont thave to search as deep for files. 
app.use(expressLayouts);
app.set('layout', './layouts/main');

//- VIEW ENGINE
app.set('view engine', 'ejs');

//- ROUTES
const routes = require('./server/routes/recipeRoutes.js');
app.use('/', routes);

//- INIT

app.listen(PORT, () => console.log(`🚀Listening 👂🏽on http://localhost:${PORT}`));