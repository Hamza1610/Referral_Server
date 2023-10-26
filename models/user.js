const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    Email: {
        type: String,
    },
    User_name: {
        type: String,
    },
    Password: {
        type: String,
    },
    Refered_code: {
        type: String
    },
    Referral_code: {
        type: String
    },
}
,{ timestamps: true }) 
const User = mongoose.model('Users referral', UserSchema);

module.exports = User;