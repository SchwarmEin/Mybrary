const mongoose = require('mongoose')
const { stringify } = require('nodemon/lib/utils')

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Author', AuthorSchema)