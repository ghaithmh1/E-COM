const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    img : { type: String },
    phone : { type: Number },
    city : { type: String },
   
    email: {
        type: String,
        required: [true, 'User email required'],
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'] 
    },
    password: {
        type: String,
        required: true,
        minlength: 6 
    }, role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "guest"] 
    }
   
});

module.exports = mongoose.model('User', UserSchema);
