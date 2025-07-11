//[1] .find(()->{})
//[2] .findIndex(()->{})

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];
/*
console.log(courses.includes({id:1, name:'a'})); [NOT WORK]

NOTE: It can not be fetched with primitive methods which we learnt
REASON: object declare in includes methods and object present in courses object are 2 different object

They have 2 different references, 2 different location in the memory

If the Objects are reference types - there references are checked that's why it got false

SOLUTION: need to use find() method
*/

const course = courses.find(function (course) {
    return course.name === 'a';
})

console.log(course);

//findIndex : present - index of element otherwise -1

const courseIndex = courses.findIndex(function (course) {
    return course.name === 'b';
})

console.log(courseIndex);

const students = [
    { rollNo: 1, name: "Ajanta" },
    { rollNo: 2, name: "Bijanta" },
    { rollNo: 3, name: "Cujata" },
    { rollNo: 4, name: "Dolly" }
];

const fetchStudent = students.find(student => student.rollNo === 1);
const fetchStudentFx = students.find(function (student) { return student.rollNo === 4 });

console.log(fetchStudent);
console.log(fetchStudentFx);

const fetchStudentWithMethod = fetchStudentBasedOnName(students, "Bijanta");
console.log(fetchStudentWithMethod);

//1. Function Declaration
function fetchStudentBasedOnName(students, n){
   return students.find(student => student.name === n);
}

//2. Function Expression
const fetchStudentWithExpression = function (students, n) {return students.find(student => student.name === n)}
console.log(fetchStudentWithExpression(students, "Cujata"));

//3. Arrow Function ES6
const fetchStudentWithArrowFxn = (students, n) => students.find(student => student.name === n);
console.log(fetchStudentWithArrowFxn(students, "Ajanta"));

