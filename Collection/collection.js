const Employee = require('../Model/model');

// Query 1: List all documents
function listAllEmployees() {
  return Employee.find({});
}

// Query 2: List employees with salary > 30000
function listHighSalaryEmployees() {
  return Employee.find({ salary: { $gt: 30000 } });
}

// Query 3: List employees with experience > 2 years
function listExperiencedEmployees() {
  return Employee.find({ experience: { $gt: 2 } });
}

// Query 4: List employees graduated after 2015 and experience > 1 year
function listRecentGraduatesWithExperience() {
  return Employee.find({ graduationYear: { $gt: 2015 }, experience: { $gt: 1 } });
}

// Query 5: Update salary of employees with salary > 70000 to 65000
function updateHighSalaryEmployees() {
  return Employee.updateMany({ salary: { $gt: 70000 } }, { $set: { salary: 65000 } });
}

// Query 6: Delete documents where last company is Y
function deleteEmployeesWithLastCompanyY() {
  return Employee.deleteMany({ lastCompany: 'Y' });
}

module.exports = {
  listAllEmployees,
  listHighSalaryEmployees,
  listExperiencedEmployees,
  listRecentGraduatesWithExperience,
  updateHighSalaryEmployees,
  deleteEmployeesWithLastCompanyY,
};
