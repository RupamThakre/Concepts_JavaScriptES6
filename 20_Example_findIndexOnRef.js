const courses = [
    { name: 'A', price: 800 },
    { name: 'B', price: 900 },
    { name: 'C', price: 1000 }
];

//find the price of course B
const course = courses.find(function (course) { return course.name === 'B' });

//using arrow function 
const course1 = courses.find(course => course.name === 'A');

console.log(course1);

//findIndex 
const index = courses.findIndex(course => course.price === 1000);
console.log(index);
