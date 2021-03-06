const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const posts = require('./routes/api/posts')
const profile = require('./routes/api/profile')

const app = express()

//DB config
const db = require('./config/keys').mongoURI

mongoose
  .connect(db)
  .then(() => console.log('Mongo connected'))
  .catch(e => console.log('MongoError on connection:', e))

app.get('/', (req, res) => {
  res.send('OK World')
})

//Use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server running on ${port}`))
