const mongoose = require("mongoose")

const { Schema } = mongoose

const imageSchema = new Schema({
  image: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
})

const Image = mongoose.model("Image", imageSchema)

module.exports = Image
