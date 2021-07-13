const { QueryTypes } = require('sequelize');

const db = require('../models');
const { authemp } = require('../validation/auth_emp');
const User = db.Users;
const Roles = db.role;

const Emp = db.Emp;
const EMP_department = db.EMP_department;
const EMP_salary = db.EMP_salary;

const Op = db.Sequelize.Op;
exports.role = (req,res)=>{
    const role = {
       role_id:req.body.role_id,
       role_name:req.body.role_name
    };
  Roles.create(role).then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
      res.status(401).send({
          message:err.message
      })
  })
}
exports.user = async(req,res)=>{
   let result = await authemp.validateAsync(req.body);
   console.log(result)
    const user = {
        user_id:result.user_id,
        role_id:result.role_id,
        user_name:result.user_name,
    };
  User.create(user).then((data)=>{
    res.send(data)
  })
  .catch((err)=>{
      res.status(401).send({
          message:err.message
      })
  })
}

exports.employee_details= async (req,res)=>{
    let result = await auth_employee_details.validateAsync(req.body);
    console.log(result)
    const emp = {
        user_id:result.user_id,
        emp_id:result.emp_id,
        country:result.country,
        state:result.state,
        department:result.department,
    }
    Emp.create(emp).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(401).send({
            message:err.message
        })
    
    })
}

exports.emp_department = (req,res)=>{
    const emp_department = {
        emp_id:req.body.emp_id,
        department_id:req.body.department_id,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
    }

    EMP_department.create(emp_department).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(401).send({
            message:err.message
        })
    
    })
}

exports.Emp_salary = (req,res)=>{
    const emp_salary = {
        emp_id:req.body.emp_id,
        startdate:req.body.startdate,
        enddate:req.body.enddate,
    }

    EMP_salary.create(emp_salary).then((data)=>{
        res.send(data)
    })
    .catch((err)=>{
        res.status(401).send({
            message:err.message
        })
    
    })
}


//find user by ID

exports.getuser = async (req,res)=>{
    try{
    const userdetails = await User.findOne({where :{user_id:req.params.id}});
    res.status(200).send({
        status:200,
        message:"details is fetch successfully ",
        data:userdetails
    })
}
catch(error){
    return res.status(401).send({
        status:401,
        message:"there is some error",
        errors:error
    })
}

}


//update the user

exports.updateuser = async (req,res)=>{
    try{
 const updateuser = await User.update({
     user_name:req.body.user_name
 },{where:{user_id:req.params.id}});
 return res.status(200).send({
     user:updateuser,
     message:"user is updated"
 })
}
catch(error){
  return res.status(401).send({
  message:"there is some error",
  status:401,
  errors:error
 })
}
}

///delete the user

exports.deleteuser = async(req,res)=>{
    try{
      const userdelete = await User.destroy({
          where:{user_id:req.params.id}
      })
      return res.status(200).send({
          status:200,
          message:"user is deleted successfully",
          user:userdelete
      })
    }
      catch (error){
        return res.status(401).send({
            status:401,
            message:"there is some error",
            errors:error
        }) 
      }  
    
    
}