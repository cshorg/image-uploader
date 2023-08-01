const express = require("express")
const Image = require("../database/schemas/Image")
const upload = require("../routes/uploadMiddleware")

const router = express.Router()

module.exports = router

//gets image
router.get("/:imageName", async (req, res) => {})

//create image link
router.post("/upload", upload.single("file"), async (req, res) => {
  Image.create({ image: req.file.filename })
    .then((image) => res.json(image))
    .catch((err) => console.log(err))
})
