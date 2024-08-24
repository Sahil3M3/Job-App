const userService=require('../service/user')

module.exports.addUser=async (req,res,next)=>{

const result=await userService.newUser(req);

res.status(result.status).json({message:result.message,error:result.error})

}

module.exports.loginUser=async (req,res,next) => {

    const result=await userService.getUser(req);

    res.status(result.status).json({message:result.message,token:result.token,error:result.error})
}