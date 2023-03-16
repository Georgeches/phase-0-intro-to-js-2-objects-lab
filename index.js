// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee, employee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete newEmployee.key
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.key
}