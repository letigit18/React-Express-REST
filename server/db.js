const mysql = require('mysql')
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wsu'
})
db.connect((error)=>{
    if(error){
        console.log('db not connected')
    }
    else{
        console.log('connected')
    }
})
module.exports = db;