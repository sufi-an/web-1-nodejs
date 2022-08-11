const express = require('express')
const fs = require ('fs')
const app = express();
//req -> hit on server/connection request
//res -> feedback


app.use('/pick-random-rumber',(req,res)=>{
    let x=Math.floor(Math.random() * 100);

    res.send( `<h1> random number =  ${x} </h1>`);
})
app.use("/admission",(req,res)=>{
    res.send("<h1>Welcome to IUB </h1> <h2>Click Here For admission</h2>")
})
app.use('/home',(req,res)=>{
//    fs.open('./index.html');
res.sendFile('./index.html', {root: __dirname })
})

app.listen(3000,()=>{
    console.log("Node app running at port 3000");
});
