/* const numbers = [1,2,3,4,5,6,7,8,9,0];

//1. looping using for of loop 
for(let number of numbers)
console.log(number);

//2. using forEach loop 
numbers.forEach(function(number){console.log(number);})

// with arrow function
numbers.forEach(number => console.log(number))



const numbers = [1,2,4,5,6,7,8,9,0];


//1. join method
console.log(numbers.join('|'));



const numbers = [3,1,7,5,0];

//1. using sort function
console.log(numbers.sort());

//2. using reverse function
console.log(numbers.reverse());

 */


// sorting | filtering | mapping | reducing | testing

const courses = [
  {name: 'A', price : 100},
  {name: 'D', price : 10},
  {name: 'B', price : 900},
  {name: 'E', price : 30},
  {name: 'C', price : 21},
  {name: 'K', price : 600},
  ];

// //1. sorting course based on increasing price

const sortedCourses = courses.sort(function(a,b) {
  if(a.price < b.price) return -1;
  if(a.price > b.price) return 1;
})

console.log(sortedCourses);

// //2. filtering course whose prices are less then 100
const prices = courses.filter(function(course){return course.price < 100 });
console.log(prices);

//3. mapping : double the salary for more than 100 price

const mapped = courses.map(function(course){
  if(course.price > 100) return course.price = course.price * course.price;
})

const filterMap = courses.filter(course => course.price > 100)
.map(course => course.price * course.price);
console.log(filterMap);

//4. reducing : find the sum of all the prices of all the courses 

const allPrice = courses.reduce((accumulator,course)=>{
  return accumulator + course.price;
},0);

console.log(allPrice);

// ---------------------------------------------------------------------------------------

let employees = [
  { id: 1, name: 'Alice', position: 'Developer' },
  { id: 2, name: 'Bob', position: 'Manager' },
  { id: 3, name: 'Charlie', position: 'Designer' }
];

//1. Adding 
employees.push({id:4,name:'David',position: 'Worker'});
console.log(employees);

//2. Finding 
const employee = employees.find(function(employee){
  return employee.id === 4
});

console.log(employee);

/*
//1. Adding + Removing

const numbers = [1,2,3];

 end - .push() | .pop()
beginning - .unshift() | .shift()
middle - .splice(index,deletecount, ...items) | .splice(2, 2)

2. Finding

primitive - indexOf() | lastIndexof() | includes() 
references - find(function(course){return course.id === 5})
- findIndex(function(course){return course.id === 5})

3. emptying

numbers = [];
numbers.length = 0;
numbers.splice(0,numbers.length)

4. combining + joining

.concat()
spread : [...first, ...second];
.join(' | ')

5. Iterating

for(let course of courses)
courses.forEach(function(course){console.log(course)})

6. sorting

numbers.sort()
numbers.reverse()
courses.sort(function(a,b){if(a.salary < b.salary) return -1;}))

7. filtering

courses.filter(function(number){return course.price>100})

8. mapping

courses.map(function(number){return course.price * course.price})

9. reducing

courses.reduce((accumulator,course)=>{return accumulator + course.price},0);
 */
