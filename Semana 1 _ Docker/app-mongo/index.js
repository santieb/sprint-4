const express = require('express')
const app = express()
const mongoose = require('mongoose')
const fs = require('fs')
const greeting = require('./model')


const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017"

mongoose.connect(
  MONGO_URI,{ 
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  (err) => {
    if (err) throw err
    console.log('Mongodb connection')
  }
)

app.get('/', async (req, res) => {

  let date = new Date()
  date = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear()

  fs.appendFile("/usr/src/volumes/data.txt", date, (err) => {
    if (err) {
      console.log(err);
    }
  })

  let response = await greeting.find()
  res.json({greeting: response})
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`listening on port ${PORT}`))
