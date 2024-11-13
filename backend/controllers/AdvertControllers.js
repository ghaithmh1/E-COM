const mongoose = require('mongoose');
const advertTest = require('../model/Advert');

const addAdvert = async (req, res) => {
    try {
        const newAdvert = new advertTest(req.body);
        await newAdvert.save();
        res.status(201).json(newAdvert);
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error adding advert', error: error.message });
    }
};

const getAdvertById = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ msg: 'Invalid advert ID' });
        }
        const advert = await advertTest.findById(id);
        if (!advert) {
            return res.status(404).json({ msg: 'Advert not found' });
        }
        res.status(200).json({ msg: 'Advert found', advert });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error fetching advert', error: error.message });
    }
};

const updateAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAdvert = await advertTest.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        if (!updatedAdvert) {
            return res.status(404).json({ msg: 'Advert not found for update' });
        }
        res.status(200).json({ msg: 'Advert updated', updatedAdvert });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error updating advert', error: error.message });
    }
};

const patchAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedAdvert = await advertTest.findByIdAndUpdate(id, { $set: { ...req.body } }, { new: true });
        if (!updatedAdvert) {
            return res.status(404).json({ msg: 'Advert not found' });
        }
        res.status(200).json({ msg: 'Advert patched', updatedAdvert });
    } catch (error) {
        console.error("Error updating advert:", error);
        res.status(500).json({ msg: 'There was a problem updating the advert', error: error.message });
    }
};

const deleteAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedAdvert = await advertTest.findByIdAndDelete(id);
        if (!deletedAdvert) {
            return res.status(404).json({ msg: 'Advert not found to delete' });
        }
        res.status(200).json({ msg: 'Advert deleted', deletedAdvert });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error deleting advert', error: error.message });
    }
};

const getAllAdverts = async (req, res) => {
    try {
        const adverts = await advertTest.find();
        res.status(200).json({ msg: 'All adverts retrieved', adverts });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error fetching all adverts', error: error.message });
    }
};

module.exports = { addAdvert, getAdvertById, updateAdvert, patchAdvert, deleteAdvert, getAllAdverts };
