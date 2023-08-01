const express = require("express")
const path = require("path")
const Image = require("../database/schemas/Image")
const upload = require("../routes/uploadMiddleware")

const router = express.Router()

module.exports = router

//gets image
router.get("/:imageName", async (req, res) => {})

//create image link
router.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const image = req.file.filename

    const newImage = new Image({ image })

    await newImage.save()

    res.status(200).json({ message: "Image uploaded successfully" })
  } catch (err) {
    res.status(500).json({ success: false, message: "Error uploading file" })
  }
})
