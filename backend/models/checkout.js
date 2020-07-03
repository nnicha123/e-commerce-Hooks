const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CheckOutSchema = new Schema({
    imgsrc:String,
    title:String,
    price:Number
})

const CheckOut = mongoose.model('checkout',CheckOutSchema)
module.exports = CheckOut