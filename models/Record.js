const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const RecordSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    type: {
        type: String
    }
})

module.exports = Record = mongoose.model('records', RecordSchema)