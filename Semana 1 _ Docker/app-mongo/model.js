const mongoose = require('mongoose');
const { Schema } = mongoose

const schema = new Schema({
  greeting: { type: String }
})

const greeting = mongoose.model('greeting', schema)

module.exports = greeting