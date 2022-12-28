const conn=require('../db/config');
let db={};

db.hoteltype=async( hoteltype_name)=>{
    return new Promise((resolve,reject)=>{   
        conn.query("insert into hotel_type values(Null,?)",[hoteltype_name],(error,result)=>{

            if(error){
            return reject(error)
            }
            return resolve(result);

        }) 
   
}
)}


db.fetchhoteltype=()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from hotel_type ORDER BY hoteltype_id DESC",(err,results)=>{
           if(err){
               return reject(err);
           } 
           return resolve(results);
        }) 
    })
    
    }


    db.gethoteltypebyid=(hoteltype_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("select * from hotel_type where hoteltype_id=?",[hoteltype_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }


    db.deletehoteltypebyid=(hoteltype_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("delete from hotel_type where hoteltype_id=?",[hoteltype_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    module.exports=db;



