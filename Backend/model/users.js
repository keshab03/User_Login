const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model('Users', userSchema)
