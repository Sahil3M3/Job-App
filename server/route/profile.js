const {Router}=require('express');
const auth=require('../middleware/auth')
const profileController=require('../controller/profile');
const router=Router();

router.get('/profile',auth,profileController.getProfile);


module.exports=router;