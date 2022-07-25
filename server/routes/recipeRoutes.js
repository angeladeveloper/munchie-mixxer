const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipieController');


//- APP ROUTES 

router.get('/', recipeController.homepage);

module.exports = router