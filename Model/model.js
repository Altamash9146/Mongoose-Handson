const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name: String,
    salary: Number,
    experience: Number,
    graduationYear: Number,
    lastCompany: String,
  });
  
  const Employee = mongoose.model('Employee', employeeSchema);
  
  module.exports = Employee;
 
  
  