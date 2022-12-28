const conn=require('../db/config');
const bcryptjs = require('bcryptjs');
let db={};


db.createhotel=async( name, city, full_address, noof_rooms, hoteltype_id, username, password, phone, email)=>{
    bcryptjs.genSalt(10, function(err, salt) {
        bcryptjs.hash(password, salt, function(err, hash){
    return new Promise((resolve,reject)=>{   
        conn.query("insert into hotel values(Null,?,?,?,?,?,?,?,?,?,?)",[name, city, full_address, noof_rooms, hoteltype_id, username, hash, phone, email, "hotel"],(error,result)=>{

            if(error){
            return reject(error)
            }
            return resolve(result);

        }) 
   
}
)}
        )}
    )}


    db.fetchhotel=()=>{
        return new Promise((resolve,reject)=>{
            conn.query("select * from hotel ORDER BY hotel_id DESC",(err,results)=>{
               if(err){
                   return reject(err);
               } 
               return resolve(results);
            }) 
        })
        
        }

    
    db.gethotelbyid=(hotel_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("select * from hotel where hotel_id=?",[hotel_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }


    db.updatehotelbyid=(hotel_id, name, city, full_address, noof_rooms, phone, email)=>{
        return new Promise((resolve,reject)=>{
            conn.query("update hotel set name=?, city=?, full_address=?, noof_rooms=?, phone=?, email=? where hotel_id=?",[name, city, full_address, noof_rooms, phone, email, hotel_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }


    


    module.exports=db;