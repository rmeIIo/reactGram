const express = require('express')
const router = express()

// test router
router.get("/", (req, res) => {
  res.send("API working!");
})

module.exports = router