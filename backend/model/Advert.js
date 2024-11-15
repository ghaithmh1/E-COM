const mongoose = require('mongoose');

const AdvertSchema =  mongoose.Schema({
    title: String,
    type: String,
    price: { type: Number , min: 0 },
    description: String,
    city: String,
    delegation: String,
    category: String,
    imageAdvert: [
        { path: String }
    ],
    date: { type: Date, default: Date.now },
    owner: String


});

const advertTest = mongoose.model('advertTest', AdvertSchema);
module.exports = advertTest;