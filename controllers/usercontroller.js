const conn=require('../db/config');
const bcryptjs = require('bcryptjs');

let db={};

//  controller to login user
db.userlogin=async(username,password)=>{
        
    return new Promise((resolve,reject)=>{
        
        conn.query("select * from user where username=?",[username],(error,res)=>{
            if(error){
                return reject(error);
            }
            return resolve(res)
        })
    
    
    })
}


//  controller to insert user data into hotel 
db.createuser=async( name, address, phone, email, username, password)=>{
    bcryptjs.genSalt(10, function(err, salt) {
    bcryptjs.hash(password, salt, function(err, hash){

    return new Promise((resolve,reject)=>{   
        conn.query("insert into user values(Null,?,?,?,?,?,?,?)",[name, address, phone, email, username, hash, "user"],async(error,result)=>{

            if(error){
            return reject(error)
            }
            return resolve(result);

        }) 
   
       }
     )}
  )}
)}

// controller to retrieve user data from database
db.fetchuser=()=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from user ORDER BY user_id DESC",(err,results)=>{
           if(err){
               return reject(err);
           } 
           return resolve(results);
        }) 
    })
    
    }


    //  controller to delete all user from database
    db.deleteuser=()=>{
        return new Promise((resolve,reject)=>{
            conn.query("delete from user",(err,results)=>{
               if(err){
                   return reject(err);
               } 
               return resolve(results);
            }) 
        })
        
        }

// controller to retrieve user by id
    db.getuserbyid=(user_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("select * from user where user_id=?",[user_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

// controller to delete each user by id
    db.deleteuserbyid=(user_id)=>{
        return new Promise((resolve,reject)=>{
            conn.query("delete from user where user_id=?",[user_id],(err,result)=>{
                if(err){
                    return reject(err)
                }
                return resolve(result)
            })
        })
    }

    // controller to update hotel by id
    db.updateuserbyid=(user_id, name, address, phone, email)=>{
        return new Promise((resolve,reject)=>{
//             var query = "update user set name="+name+", address="+address+", phone="+phone+", email="+email+" where user_id="+user_id;
// console.log(query);


            conn.query("update user set name=?, address=?, phone=?, email=? where user_id=?",[name, address, phone, email, user_id ],(err,result)=>{
                if(err){
                    console.log(err);
                    return reject(err)
                      
                }
                console.log(result);
                return resolve(result)
            })
        })
    }


    db.verifyoauthuser = (email) =>{
        return new Promise((resolve,reject)=>{
            //             var query = "update user set name="+name+", address="+address+", phone="+phone+", email="+email+" where user_id="+user_id;
            // console.log(query);
            
            
                        conn.query("select * from user where email=?",[email ],(err,result)=>{
                            if(err){
                                console.log(err);
                                return reject(err)
                                  
                            }
                            console.log(result);
                            return resolve(result)
                        })
                    })
    }

module.exports=db;