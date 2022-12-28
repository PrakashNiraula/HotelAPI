var express = require('express');
var router = express.Router();
var roomtypecontroller=require('../controllers/roomtypecontroller')
var auth =  require('../auth/auth');



router.route('/createroomtype')
.post(auth.verifyUser,async (req,res,next)=>{

  try{
   // console.log(req.body);
    let result= await roomtypecontroller.roomtype(req.body.roomtype_name);
     res.json(result)

  }catch(error){
    next(error);
  }

})



router.route('/getroomtype')
.get(async (req,res,next)=>{
    try {
        res.json(await roomtypecontroller.fetchroomtype())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/deleteroomtype')
.delete(async(req,res,next)=>{
    try {
        res.json(await roomtypecontroller.deleteroomtype())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/roomtype/:roomtype_id')
.get(async(req,res,next)=>{
    try {
        res.json(await roomtypecontroller.getroomtypebyid(req.params.roomtype_id))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/deleteroomtype/:roomtype_id')
.delete(async(req,res,next)=>{
    try {
        res.json(await roomtypecontroller.deleteroomtypebyid(req.params.roomtype_id))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});

router.route('/updateroomtype/:roomtype_id')
.put(async(req,res,next)=>{
    try {
        res.json(await roomtypecontroller.updateroomtypebyid(req.params.roomtype_id, req.body.roomtype_name))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});





module.exports=router;


