
var express = require('express');
var router = express.Router();
var roomtypecontroller=require('../controllers/roomtypecontroller')
var auth =  require('../auth/auth');


router.route('/createroom')
.post(async (req,res,next)=>{

  try{
    let result= await roomcontroller.saveroom(req.body.hotel_id,req.body.roomtype_id,req.body.price,req.body.unit);
     res.json(result)

  }catch(error){
    next(error);
  }

})


router.route('/getroom')
.get(async(req,res,next)=>{
    try {
        res.json(await roomcontroller.fetchroom())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});



router.route('/deleteroom')
.delete(async(req,res,next)=>{
    try {
        res.json(await roomcontroller.deleteroom())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});



router.route('/getroomid/:room_id')
.get(async(req,res,next)=>{
    try {
        console.log(req.params.room_id);
        res.json(await roomcontroller.getroombyid(req.params.room_id))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/deleteroomid/:room_id')
.delete(async(req,res,next)=>{
    try {
        res.json(await roomcontroller.deleteroombyid(req.params.room_id))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


module.exports=router;