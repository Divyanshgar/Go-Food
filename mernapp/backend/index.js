const express = require('express')
const mongoDB = require("./db")
// const { connect } = require('mongoose')

mongoDB();
const app = express()
const port = 5000 

app.use(express.json())
app.use('/api/CreateUser', require("./Routes/CreateUser"))

app.listen(port, ()=>{
    console.log(`Example app listening on http://localhost:${port}`)
})
