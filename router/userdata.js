const express = require('express')
const controller =  require('../controller/userData')


 const router = express.Router();

 router.use("/username-input", controller.getUserInput);
  router.use("/show-username",controller.showUsername)
    

 module.exports = router;
