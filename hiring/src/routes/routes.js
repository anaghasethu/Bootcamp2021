const {Router} = require('express');
const router = Router();
const controller=require('./controller')

router.post('/',controller.addDetails)

module.exports=router