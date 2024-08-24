const sequelize=require('sequelize');

const Sequelize=new sequelize("jobapp","root","manager",{dialect:"mysql"});


module.exports=Sequelize;