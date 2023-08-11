const router = require('express').Router()
const {listAllEmployees,
    updateHighSalaryEmployees,
    deleteEmployeesWithLastCompanyY,
    listExperiencedEmployees,
    listHighSalaryEmployees,
    listRecentGraduatesWithExperience
} = require('./Collection/collection')


router.post('/listAllEmployess',listAllEmployees)
router.post('/updateHighSalaryEmployees',updateHighSalaryEmployees)
router.post('/deleteEmployeesWithLastCompanyY',deleteEmployeesWithLastCompanyY)
router.post('/listExperiencedEmployees',listExperiencedEmployees)
router.post('/listHighSalaryEmployees',listHighSalaryEmployees)
router.post('/listRecentGraduatesWithExperience',listRecentGraduatesWithExperience)

module.exports = router