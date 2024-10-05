const mongoo = require('mongoose');

const UserSchema = new mongoo.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const UserModel = mongoo.model('User', UserSchema);
module.exports = UserModel;