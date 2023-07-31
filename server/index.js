const express = require("express")
const cors = require("cors")

const PORT = process.env.PORT || 5000
const app = express()

app.use(cors())
app.use(express.json())

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})