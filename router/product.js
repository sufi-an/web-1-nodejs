const express = require('express');
const router = express.Router()

router.use('/get-products',(req,res)=>{
    res.send(['product 1','product 2','product 3','product 4']);
})

module.exports = router;