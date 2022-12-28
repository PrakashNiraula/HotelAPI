var express = require('express');
var router = express.Router();
var hoteltypecontroller=require('../controllers/hoteltypecontroller')


router.route('/createhoteltype')
.post(async (req,res,next)=>{
  try{

    let result= await hoteltypecontroller.hoteltype(req.body.hoteltype_name);
     res.json(result)

  }catch(error){
    next(error);
  }

})


router.route('/gethoteltype')
.get(async(req,res,next)=>{
    try {
        res.json(await hoteltypecontroller.fetchhoteltype())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/deletehoteltype')
.delete(async(req,res,next)=>{
    try {
        res.json(await hoteltypecontroller.deletehoteltype())  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/hoteltype/:hoteltype_id')
.get(async(req,res,next)=>{
    try {
        res.json(await hoteltypecontroller.gethoteltypebyid(req.params.hoteltype_id))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});


router.route('/deletehoteltype/:hoteltype_id')
.delete(async(req,res,next)=>{
    try {
        res.json(await hoteltypecontroller.deletehoteltypebyid(req.params.hoteltype_id))  
    } catch (error) {
        console.log(error);
        next(error); 
    }
});




module.exports = router;