const conn=require('../db/config');
let db={};

db.saveroom=async( hotel_id,roomtype_id,price,unit)=>{
    return new Promise((resolve,reject)=>{   
        conn.query("insert into room values(Null,?,?,?,?)",[hotel_id,roomtype_id,price,unit],(error,result)=>{

            if(error){
            return reject(error)
            }
            return resolve(result);

        }) 
   
}
)}


db.fetchroom=()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from room ORDER BY room_id DESC",(err,results)=>{
           if(err){
               return reject(err);
           } 
           return resolve(results);
        }) 
    })
    
    }


    db.getroombyid=(room_id)=>{
        return new Promise((resolve,reject)=>{
            console.log(room_id);
            conn.query("select * from room where room_id=?",[room_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }


    db.deleteroombyid=(room_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("delete from room where room_id=?",[room_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }


    db.updateroombyid=(room_id, price, unit)=>{
        return new Promise((resolve,reject)=>{
            conn.query("update room set unit=?, price=? where room_id=?",[unit, price, room_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }






module.exports=db;