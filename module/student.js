const mongoose = require('mongoose');
const multer = require('multer');
const imgpath = "/uplods";
const path = require('path');







const studentschems = mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    age : {
        type : Number ,
        required : true
    },
    gender :  {
        type : String,
        required : true
    },
    hobby : {
        type : Array,
        required : true
    },
    citys : {
        type : String,
        required : true
    },
    adminimage : {
        type : String,
        required : true
    }


})


const imagestorage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,"..",imgpath))
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now())
    }
})




studentschems.statics.uplodeImage = multer({storage:imagestorage}).single("adminimage");
studentschems.statics.imagemodalpath = imgpath;
const Student = mongoose.model('Student',studentschems);
module.exports = Student;