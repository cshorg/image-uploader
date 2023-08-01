const express = require("express")
const multer = require("multer")
const { v4: uuidv4 } = require("uuid")

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images")
  },
  filename: (req, file, cb) => {
    const uniqueString = uuidv4()
    cb(null, uniqueString)
  }
})

const upload = multer({ storage: storage })

module.exports = upload
