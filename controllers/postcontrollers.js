const  posts  = require('../module/post');
const path = require('path');
const fs =  require('fs')

module.exports.posts = async(req,res)=>{
    return  res.render('post');
}

module.exports.addpostssdata = async(req,res)=>{
    console.log('hi..')
    var imagepath = '';
    if(req.file){
        imagepath = posts.imagemodalpath+"/"+req.file.filename;
    }
    req.body.adminimage = imagepath;

    await posts.create(req.body);
    return res.redirect('back');
}


module.exports.viewpost = async(req,res)=>{
    let data = await posts.find({});
    return res.render('view_post',{
        viewposts:data
    })
}
module.exports.updaterec = async(req,res)=>{
    var up = await posts.findById(req.params.id);
    return res.render('postupdate',{
        st : up
    })
}
module.exports.deleterec = async(req,res)=>{
    let olddata = await posts.findById(req.params.id);
    console.log(olddata)
    if(olddata.adminimage){
        let fullpath = path.join(__dirname,'..',olddata.adminimage);
        await fs.unlinkSync(fullpath);
    }


    await posts.findByIdAndDelete(req.params.id);
    return res.redirect('back');
}

module.exports.editstud = async(req,res)=>{
    let olddt = await posts.findById(req.body.id);
    
    if(req.file){
        

        if(olddt.adminimage){
            let fullpath = path.join(__dirname,"..",olddt.adminimage);
            await fs.unlinkSync(fullpath);
        }
        var imgpath = '';
        imgpath = posts.imagemodalpath+"/"+req.file.filename;
        req.body.adminimage = imgpath;
       
    }
    else
    {
      
        req.body.adminimage = olddt.adminimage;
    }


    
    await posts.findByIdAndUpdate(req.body.id,req.body);
    return res.redirect('/post/viewpost');
}