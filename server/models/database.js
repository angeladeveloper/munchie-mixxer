const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, UseUnifiedTopology: true });

const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection errot:'));
db.once('open', function () {
  console.log("connected🔓")
});

//- MODELS 
require('./Category.js')
require('./Recipe.js')