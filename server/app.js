const express = require('express');
const app = express()
const cors = require('cors')
const db = require('./db.js')

const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())
db.query(`insert into checktable(name, sex, department) values ('chala', 'male', 'Health')`, (err, result)=>{
    if(result){
        console.log('record submitted')
    }
    else{
        throw err
    }
})
//routes
app.post('/register', (req, res)=>{
    console.log(req.body)
    res.json({"message": "The record has been successfully updated!"})
})
app.listen(5000, ()=>{
    console.log("app running in port 5000")
})