const mongoose = require('mongoose');

const AdvertSchema =  mongoose.Schema({
    title: String,
    type: String,
    price: Number,
    description: String,
    city: String,
    delegation: String,
    category: String,
    imageAdvert: [
        { path: String }
    ]
});

const advertTest = mongoose.model('advertTest', AdvertSchema);
module.exports = advertTest;