// Write your solution in this file!
let employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee = {...employee}
    newEmployee[key] = value
    return newEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete newEmployee.name
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    let newEmployee = {...employee}
    delete employee.name
    delete newEmployee.name
    return employee
}