const conn=require('../db/config');
let db={};


db.roomtype=async( roomtype_name)=>{
    return new Promise((resolve,reject)=>{   
        conn.query("insert into room_type values(Null,?)",[roomtype_name],(error,result)=>{

            if(error){
            return reject(error)
            }
            return resolve(result);

        }) 
   
}
)}


db.fetchroomtype=()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from room_type ORDER BY roomtype_id DESC",(err,results)=>{
           if(err){
               return reject(err);
           } 
           return resolve(results);
        }) 
    })
    
    }



    db.getroomtypebyid=(roomtype_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("select * from room_type where roomtype_id=?",[roomtype_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }





module.exports=db;