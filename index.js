// Write your solution in this file!
let employee = {};

function   updateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function updateEmployeeWithKeyAndValue1(employee, key, value) {
    var newemployee = Object.assign({}, employee, {[key]: value});
  return newemployee;
  }

function  destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    let newemployee = Object.assign({},
        employee);
        delete newemployee[key];
        return newemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}