const express = require('express')
const router = express.Router()
const mainpage = require('../controller/mainPage')

router.get('/',mainpage.getMainPage)
module.exports = router