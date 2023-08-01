const express = require("express")
const image = require("./image")

const router = express.Router()

router.use("/image", image)

module.exports = router
