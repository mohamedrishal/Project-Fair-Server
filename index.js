// Loads .env file contents into precess .env by default.

require('dotenv').config()
const express = require('express')
const cors = require('cors')
const router =  require('./Routes/router')
require ('./DB/connection')
// create an express application
const pfServer = express()

pfServer.use(cors())
pfServer.use(express.json())
pfServer.use(router)
const PORT  = 4000 || process.env.PORT

pfServer.listen(PORT,()=>{
    console.log(`Project Fair Server started at Port : ${PORT} and waiting for Client Requests !!!!`);
})

// http get request resolving to http://localhost:4000/
pfServer.get('/',(req,res)=>{
    res.send(`<h1>Project Fair Server started waiting for Client Requests !!!!</h1>`)
})