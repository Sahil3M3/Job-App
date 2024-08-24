const {Router}=require('express')
const userController=require('../controller/user')

const router=Router();

router.post('/register',userController.addUser);
router.post('/login',userController.loginUser);

module.exports=router