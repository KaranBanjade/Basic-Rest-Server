const { Router } = require("express")
const express = require("express")
require("../src/db/conn")
const app = express()
const port = process.env.PORT || 3000
const MensRanking = require("../src/models/schema")
const router = require("./routers/route")
app.use(express.json())
app.use(router)

app.listen(port, ()=> console.log(`connection setup at ${port}`))
    
