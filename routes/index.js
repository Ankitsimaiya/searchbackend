const express = require("express")
const youtube = require("../controller/youtube")
const googleCustomSearch = require("../controller/googleCustomSearch")
const googleScholer = require("../controller/googleScholer")

const router = express.Router()

router.get("/youtube", youtube)
router.get("/gooCus", googleCustomSearch)
router.get("/gooSch", googleScholer) 

module.exports = router