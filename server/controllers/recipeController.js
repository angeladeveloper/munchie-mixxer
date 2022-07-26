require('../models/database');
const Category = require("../models/Category");
const Recipe = require("../models/Recipe");


// - GET HOMEPAGE /
exports.homepage = async (req, res) => {
  console.log('🏠Render index page');
  try {
    const limitNumber = 5;
    // 🪄 limitNumber is the number of categories that the homepage can handle. 
    const categories = await Category.find({}).limit(limitNumber);
    res.render('index', {
      title: 'Munchie🥦 Homepage🏠',
      categories,
    });
  } catch (error) {
    console.error("ERROR📛:", error);
    res.status(500).send({ message: error.message || "📛Error Occurred📛" });
    // we do res 500 here if we cant connect to the database to render our info on the homepage
  }
}

//- get categories

exports.exploreCategories = async (req, res) => {
  console.log('📃Render categories page');
  try {
    const limitNumber = 5;
    // 🪄 limitNumber is the number of categories that the homepage can handle. 
    const categories = await Category.find({}).limit(limitNumber);
    res.render('categories', {
      title: 'Munchie🥦 Categories 📃',
      categories,
    });
  } catch (error) {
    console.error("ERROR📛:", error);
    res.status(500).send({ message: error.message || "📛Error Occurred📛" });
    // we do res 500 here if we cant connect to the database to render our info on the homepage
  }
}







// * This is to insert dummy data. 
async function insertDummyCategoryData(data) {
  try {
    await Category.insertMany(data);
  } catch (error) {
    console.log("📛ERROR📛:", error)
  }
}


// - SAMPLE DATA
const sampleData = [
  {
    "name": "Thai",
    "image": "thai-food.jpg"
  },
  {
    "name": "American",
    "image": "american-food.jpg"
  },
  {
    "name": "Chinese",
    "image": "chinese-food.jpg"
  },
  {
    "name": "Mexican",
    "image": "mexican-food.jpg"
  },
  {
    "name": "Indian",
    "image": "indian-food.jpg"
  },
  {
    "name": "Spanish",
    "image": "spanish-food.jpg"
  }
];

// insertDummyCategoryData(sampleData);


async function insertDymmyRecipeData() {
  try {
    await Recipe.insertMany([
      {
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American",
        "image": "southern-friend-chicken.jpg"
      },
      {
        "name": "Recipe Name Goes Here",
        "description": `Recipe Description Goes Here`,
        "email": "recipeemail@raddy.co.uk",
        "ingredients": [
          "1 level teaspoon baking powder",
          "1 level teaspoon cayenne pepper",
          "1 level teaspoon hot smoked paprika",
        ],
        "category": "American",
        "image": "southern-friend-chicken.jpg"
      },
    ]);
  } catch (error) {
    console.log('err', + error)
  }
}

insertDymmyRecipeData();
