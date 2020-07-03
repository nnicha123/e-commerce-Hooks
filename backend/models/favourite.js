const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const FavouriteSchema = new Schema({
    title:String,
    imgsrc:String,
    paragraph:String
})
const Favourite = mongoose.model('favourite',FavouriteSchema)
module.exports = Favourite