var express = require('express');

var approuter = express.Router();

var usercontroller = require('../controller/userController');

approuter.post('/addusers',usercontroller.user);
approuter.post('/role',usercontroller.role);
approuter.post('/emp',usercontroller.employee_details);
approuter.post('/emp_dep',usercontroller.emp_department);
approuter.post('/emp_salary',usercontroller.Emp_salary);

approuter.get('/users/:id',usercontroller.getuser);
approuter.put('/users/update/:id',usercontroller.updateuser);
approuter.delete('/users/delete/:id',usercontroller.deleteuser);




module.exports =approuter;