const employees = [
    {id:1, name:"A"},
    {id:2, name:"B"},
    {id:3, name:"c"}
];

//Type-1
function fetchEmpBasedOnFunctionDeclaration(employees,id){
    return employees.find(employee => employee.id === id);
}

//Type-2
const fetchEmpBasedOnFunctionExpression = function (employees, id ) { 
    return employees.find(employee => employee.id === id);
}

//Type-3
const fetchEmpBasedOnArrowFunction = (employees,id) => employees.find(employee => employee.id === id);

console.log(fetchEmpBasedOnFunctionDeclaration(employees,1));
console.log(fetchEmpBasedOnFunctionExpression(employees,2));
console.log(fetchEmpBasedOnArrowFunction(employees,3));
