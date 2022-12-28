var express = require('express');
var router = express.Router();
var usercontroller=require('../controllers/usercontroller');
const jsonwebtoken = require('Jsonwebtoken'); 
const bcryptjs = require('bcryptjs');
var validation=require('../validation/validation');

router.route('/getuser')
.get(async(req,res,next)=>{
    try {
        res.json(await usercontroller.fetchuser())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
  })


  router.route("/login")
  .post(async(req,res,next)=>{
    let userdata= await usercontroller.userlogin(req.body.username,req.body.password);
    if (userdata.length == 0)
    {
        res.json({
            status:"false",
            message:`Invalid Credentials`
        }).status(200);
        return;
    } 

    bcryptjs.compare(req.body.password, userdata[0].password,(err,result)=>{
      if(err){
        return next(err);
    }
    let payload={

      "user_id":userdata[0].user_id,
      "name":userdata[0].name,
      "address":userdata[0].address,
      "phone":userdata[0].phone,
      "email":userdata[0].email,
      "username":userdata[0].username,
      "role" : userdata[0].role
              }
              jsonwebtoken.sign(payload,"SignKey",async(err,res2)=>{
                if(err) next(err);
                res.json({
                  status:"Login successful",
                  token:`Bearer ${res2}`
              }).status(200);
              })
   

    })
  
  })


  router.route('/register')
  .post(async (req,res,next)=>{

    try{

      const {errors,isValid}=validation.uservalidation(req.body)
    if(!isValid){
        res.statusCode = 400;
        res.setHeader('Content-Type', 'application/json');
        return res.json(errors); 
       
    }
    res.json(await usercontroller.createuser(req.body.name, req.body.address, req.body.phone,
      req.body.email, req.body.username, req.body.password ))

    }catch(err){
      next(err);
    }
  })
    



module.exports = router;
