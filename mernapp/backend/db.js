const mongoose = require('mongoose')
const schema = mongoose.Schema
const mongoURI = 'mongodb://127.0.0.1:27017/?directConnection=true'
const db = ()=>{
    mongoose.connect(mongoURI)
    console.log("Connected to Mongo Successfully");
};

// db.on('error', console.error.bind(console, 'connection error: '));
// db.once('open', function(){
//     console.log("We are connected");
// })
module.exports = db;