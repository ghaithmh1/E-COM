const express = require('express');
const advertRoute = express.Router();
const { addAdvert, getAdvertById, updateAdvert, patchAdvert, deleteAdvert, getAllAdverts } = require('../controllers/AdvertControllers');

// POST /advert
advertRoute.post('/', addAdvert);

// GET /advert/:id
advertRoute.get('/:id', getAdvertById);

// PUT /advert/:id
advertRoute.put('/:id', updateAdvert);

// PATCH /advert/:id
advertRoute.patch('/:id', patchAdvert);

// DELETE /advert/:id
advertRoute.delete('/:id', deleteAdvert);

// GET /advert
advertRoute.get('/', getAllAdverts);

module.exports = advertRoute;
