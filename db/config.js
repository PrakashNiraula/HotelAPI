var mysql      = require('mysql');
const pool=mysql.createPool({

    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'hotel_new'
})

module.exports=pool;