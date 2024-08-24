const express=require('express')
const cors=require('cors')

//routes
const userRoutes=require('./route/user')

//Table
const Sequelize=require('./util/database')
const User=require('./model/user');



const app=express();
app.use(cors())
app.use(express.json());

//routing
app.use('/api',userRoutes)



Sequelize.sync()
.then(r=>{

    app.listen(5000,()=>{
        console.log("Database is Connected and Server is running on 5000");
        
    })
}).catch(e=>{
    console.log(e);
    
})