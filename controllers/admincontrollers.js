const Student = require('../module/student')
const path = require('path');
const fs =  require('fs')

module.exports.adddata = async(req,res)=>{
    return  res.render('adddata');
}
module.exports.editstud = async(req,res)=>{
    let olddt = await Student.findById(req.body.id);
    
    if(req.file){
        

        if(olddt.adminimage){
            let fullpath = path.join(__dirname,"..",olddt.adminimage);
            await fs.unlinkSync(fullpath);
        }
        var imgpath = '';
        imgpath = Student.imagemodalpath+"/"+req.file.filename;
        req.body.adminimage = imgpath;
       
    }
    else
    {
      
        req.body.adminimage = olddt.adminimage;
    }


    
    await Student.findByIdAndUpdate(req.body.id,req.body);
    return res.redirect('/viewdata');
}
module.exports.updaterec = async(req,res)=>{
    var up = await Student.findById(req.params.id);
    return res.render('updatest',{
        st : up
    })
}
module.exports.deleterec = async(req,res)=>{
    let olddata = await Student.findById(req.params.id);
    if(olddata.adminimage){
        let fullpath = path.join(__dirname,'..',olddata.adminimage);
        await fs.unlinkSync(fullpath);
    }


    await Student.findByIdAndDelete(req.params.id);
    return res.redirect('back');
}
module.exports.viewdata = async(req,res)=>{
    let data = await Student.find({});
    return res.render('viewdata',{
        stdata:data
    })
}

module.exports.addssdata = async(req,res)=>{
    var imagepath = '';
    if(req.file){
        imagepath = Student.imagemodalpath+"/"+req.file.filename;
    }
    req.body.adminimage = imagepath;

    await Student.create(req.body);
    return res.redirect('back');
}

