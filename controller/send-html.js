const path =require('path')
exports.sendHtml= async(req,res)=>{
    // res.sendFile(path.join(__dirname,'../views/index.html'))
    res.sendFile(path.join(__dirname,'../','views','/second.html'))
}
