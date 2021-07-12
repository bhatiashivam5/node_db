const{Sequelize,DataTypes} = require('sequelize');


const sequelize = new Sequelize('staff','root','',{
    host:'localhost',
    dialect:'mysql',
    pool:{max:5,min:0,idle:1000}

});

sequelize.authenticate()
.then(()=>{
    console.log("connected");
})
.catch(err=>{
    console.log("error"+err);
});
 

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.role = require('./role')(sequelize,DataTypes);
db.user = require('./users')(sequelize,DataTypes);
db.emp_details = require('./emp_details')(sequelize,DataTypes);
db.emp_department = require('./emp_department')(sequelize,DataTypes);
db.emp_salary = require('./emp_salary')(sequelize,DataTypes);
db.sequelize.sync({force:true})
.then(()=>{
    console.log("sync");
})

module.exports=db;