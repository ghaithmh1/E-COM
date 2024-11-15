
const advertTest = require('../model/Advert');


const addAdvert = async (req, res) => {
    try {
        const newadvert = new advertTest(req.body);
        await newadvert.save();
        res.json(newadvert);
    } catch (error) {
        console.error(error);
    }
}

const getAdvertById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const advert = await advertTest.findById(id);
        res.status(200).json({ msg: 'Advert', advert });
    } catch (error) {
        console.log(err);
        res.send('You have a problem');
    }
};

const updateAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const updatedAdvert = await advertTest.findByIdAndUpdate(id, { $set: { ...req.body } });
        console.log("Updated Advert", updatedAdvert);
        res.status(200).json({ msg: 'Advert updated', updateAdvert });
    } catch (error) {
        console.log(err);
        res.send('You have a problem');
    }
};
const patchAdvert = async (req, res) => {
    try {
        const { id } = req.params;

        // Update the advert and return the updated document
        const updatedAdvert = await advertTest.findByIdAndUpdate(
            id, 
            { $set: { ...req.body } }, 
            { new: true }
        );

        if (!updatedAdvert) {
            return res.status(404).json({ msg: 'Advert not found' });
        }

        console.log("patched Advert:", updatedAdvert);
        res.status(200).json({ msg: 'Advert updated', updatedAdvert });
    } catch (error) {
        console.error("Error updating advert:", error);
        res.status(500).json({ msg: 'There was a problem updating the advert', error: error.message });
    }
};


const deleteAdvert = async (req, res) => {
    try {
        const { id } = req.params;
        console.log("id", id);
        const deleteAdvert = await advertTest.findByIdAndDelete(id);
        res.status(200).json({ msg: 'Advert', deleteAdvert });
    } catch (error) {
        console.log(error);
        res.send('You have a problem');
    }
};

const getAllAdverts = async (req, res) => {
    try {
        const adverts = await advertTest.find();
        res.status(200).json({ msg: 'You got all the adverts', adverts });
    } catch (error) {
        console.log(err);
        res.send('You have a problem');
    }
}



module.exports = { addAdvert, getAdvertById, updateAdvert, patchAdvert, deleteAdvert, getAllAdverts };