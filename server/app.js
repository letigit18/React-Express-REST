const express = require('express');
const app = express()
const cors = require('cors')
const db = require('./db.js')

const bodyParser = require('body-parser')
app.use(cors());
app.use(bodyParser.json())
//creates new record

//fetch the data from the table

//routes
app.get('/', (req, res)=>{
    db.query('select * from checktable', (err, result)=>{
     if(result){
        res.json(result)
     }
     else{
        throw err
     }
    })
})
app.post('/register', (req, res)=>{
    const data = {name: req.body.fname, sex: req.body.sex, department: req.body.department}
    db.query(`insert into checktable(name, sex, department) values (?, ?, ?)`, [data.name, data.sex, data.department], (err, result)=>{
        if(result){
            res.json({"message": "The record has been successfully updated!"})
        }
        else{
            throw err
        }
    })
    
})
app.listen(5000, ()=>{
    console.log("app running in port 5000")
})