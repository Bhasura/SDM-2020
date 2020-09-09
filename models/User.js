const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    organisation: {
        type: String
    },
    user_type: {
        type: String
    }
})

module.exports = User = mongoose.model('users', UserSchema)