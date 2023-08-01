const express = require("express")
const path = require("path")
const Image = require("../database/schemas/Image")
const upload = require("../routes/uploadMiddleware")

const router = express.Router()

module.exports = router

router.get("/:imageName", async (req, res) => {
  const imageName = req.params.imageName

  try {
    const image = await Image.findOne({ image: imageName })

    if (!image) {
      return res.status(404).json({ error: "Image not found" })
    }

    const imagePath = path.join(__dirname, "../images/", image.image)

    res.sendFile(imagePath)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})

router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const createdImage = await Image.create({ image: req.file.filename })
    res.json(createdImage)
  } catch (error) {
    res.status(500).json({ error: "Internal server error" })
  }
})
