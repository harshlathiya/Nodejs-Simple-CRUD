const mongoose = require('mongoose');
const multer = require('multer');
const imgpath = "/uplods/post";
const path = require('path');



const postschems = mongoose.Schema({
    
    name : {
        type : String ,
        required : true
    },

    postmessage : {
        type : String ,
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




postschems.statics.uplodeImage = multer({storage:imagestorage}).single("adminimage");
postschems.statics.imagemodalpath = imgpath;
const posts = mongoose.model('posts',postschems);
module.exports = posts;