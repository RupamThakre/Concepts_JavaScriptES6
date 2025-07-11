// Iterating an Array

/* 
const numbers = [1, 2, 3];

for (let number of numbers)
    console.log(number);

numbers.forEach(function (number) {
    console.log(number);
})

numbers.forEach(number => console.log(number)) 
*/

const elements = [1, '1', 2, '2', 3, '3', 4, '4', 5, '5', 6, '6'];

//Way-1 : Using FOR loop
for (let element of elements) {
    console.log(element);
}

//Way-2 : Using .forEach(()=>{}) loop

elements.forEach(function (element) { console.log(element) });
elements.forEach(element => console.log(element));