const express = require('express')
const router = express.Router()
const Favourite = require('../models/favourite')
const CheckOut = require('../models/checkout')

router.get('/favourites',(req,res) => {
    Favourite.find({}).then(favourite => res.send(favourite))
})

router.get('/checkouts',(req,res) => {
    CheckOut.find({}).then(checkout => res.send(checkout))
})

router.post('/favourites',(req,res) => {
    Favourite.create(req.body).then(favourite => res.send(favourite))
})
router.post('/checkouts',(req,res) => {
    CheckOut.create(req.body).then(checkout => res.send(checkout))
})

router.delete('/favourites/:id',(req,res) => {
    Favourite.findByIdAndRemove({_id:req.params.id}).then(favourite => res.send(favourite))
})
router.delete('/checkouts/:id',(req,res) => {
    CheckOut.findByIdAndRemove({_id:req.params.id}).then(checkout => res.send(checkout))
})

module.exports = router