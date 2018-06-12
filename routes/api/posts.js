const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.json({ msg: 'Ok from post' })
})

module.exports = router
