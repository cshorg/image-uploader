const express = require("express")
const cors = require("cors")
const path = require("path")
const routes = require("./routes")

require("dotenv").config()
require("./database")

const PORT = process.env.PORT || 5000
const ORIGIN = process.env.ORIGIN
const app = express()

app.use(cors({ ORIGIN }))
app.use(express.json())

app.use("/", routes)

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
