let numbers = [1, 2, 3, 4];

let anotherObject = numbers;

/* 
SOLUTION - 1  : <<  numbers = [] ;  >>

PROBLEM : still [1,2,3,4] remain in memory as there is no referece to this object - removed by GC
but if anotherObject storing that numbers referece - then not be removed by GC
so above solution works when no other object referecing original array
console.log(numbers);

SOLUTION - 2  : << numbers.length = 0; >>

In this case - below solution works
trucated the original array
so by default whatever other objects are referecing it 
automatically got zero

console.log(numbers);
console.log(anotherObject);

SOLUTION - 3 : << numbers.splice(0, numbers.length); >>

numbers.splice(0, numbers.length);
console.log(numbers);
console.log(anotherObject);

SOLUTION - 4 : << numbers.pop(); >>

while(numbers.length > 0)
numbers.pop();
console.log(numbers);
console.log(anotherObject);

 */

let elements = [1, '1', 2, '2', 3, '3', 4, '4'];
let copyElements = elements;

//Way-1 : assigning empty array
elements = [];
console.log(elements);  // []
console.log(copyElements); // [1,'1',2,'2',3,'3',4,'4']

//Way-2 : making original array length 0
elements.length = 0;
console.log(elements);  // []
console.log(copyElements); // []

//Way-3 : using .splice(idnex, deleteCount)
elements.splice(0, elements.length);
console.log(elements);  // []
console.log(copyElements); // []

//Way-4 : .pop() untill length 0
while (elements.length > 0) {
    elements.pop();
}
console.log(elements);  // []
console.log(copyElements); // []