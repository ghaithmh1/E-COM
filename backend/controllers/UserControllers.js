const UserTest = require('../model/User');

// Helper function to find user by ID
const findUserById = async (id) => {
    return await UserTest.findById(id);
};

const addUser = async (req, res) => {
    try {
        const { email } = req.body;

        // Check if the email already exists
        const existingUser = await UserTest.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'Email already in use.' });
        }

        const newUser = new UserTest(req.body);
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error adding user:", error);
        res.status(500).json({ msg: 'There was a problem adding the user', error: error.message });
    }
};


const getUserById = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await findUserById(id);
        if (!user) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        res.status(200).json({ success: true, msg: 'User found', user });
    } catch (error) {
        console.error("Error retrieving user by ID:", error);
        res.status(500).json({ success: false, msg: 'There was a problem retrieving the user', error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserTest.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        res.status(200).json({ success: true, msg: 'User updated successfully', updatedUser });
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ success: false, msg: 'There was a problem updating the user', error: error.message });
    }
};

const patchUser = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedUser = await UserTest.findByIdAndUpdate(id, { $set: req.body }, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        res.status(200).json({ success: true, msg: 'User patched successfully', updatedUser });
    } catch (error) {
        console.error("Error patching user:", error);
        res.status(500).json({ success: false, msg: 'There was a problem patching the user', error: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedUser = await UserTest.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        res.status(200).json({ success: true, msg: 'User deleted successfully', deletedUser });
    } catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ success: false, msg: 'There was a problem deleting the user', error: error.message });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await UserTest.find();
        res.status(200).json({ success: true, msg: 'Users retrieved successfully', users });
    } catch (error) {
        console.error("Error retrieving all users:", error);
        res.status(500).json({ success: false, msg: 'There was a problem retrieving the users', error: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find user by email
        const user = await UserTest.findOne({ email });
        if (!user) {
            return res.status(401).json({ success: false, msg: 'Invalid email.' });
        }

        // Compare the password 
        if (user.password !== password) {
            return res.status(401).json({ success: false, msg: 'Invalid password.' });
        }

        // User authenticated
        const role = user.role; // Add this line to fetch the role from the user object
        res.status(200).json({ success: true, msg: 'Login successful!', user, role });
    } catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ success: false, msg: 'There was a problem logging in the user', error: error.message });
    }
};






module.exports = { addUser, loginUser , getUserById, updateUser, patchUser, deleteUser, getAllUsers };
