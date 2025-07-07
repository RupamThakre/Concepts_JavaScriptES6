/*
const numbers = [1,2,3,4];

1. end
ADD : numbers.push()
REMOVE : const last = numbers.pop();

console.log(last);
console.log(numbers);

2. beginning
ADD: number.unshift()
REMOVE:  const firstRemove = numbers.shift();

console.log(firstRemove);
console.log(numbers);

3. middle
ADD:  number.splice(2, 0 , '1','2');
REMOVE: numbers.splice(2, 1);

param1 - index location where elements starts deleting
param2 - how many elements wants to remove 

REMOVE: numbers.splice(2, 2);
console.log(numbers);
*/

const elements = [1,'2',3,'4',5,'6'];

//[1]. Beginning [ADD - .unshift(), .shift()]
elements.unshift(0,'0'); 
console.log(elements);
/* Output:
[
  0, '0', 1, '2',
  3, '4', 5, '6'
] */

//.shift() - Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
elements.shift();
console.log(elements);
/* Output:
[
  '0', 1, '2', 3,
  '4', 5, '6'
] */

/* [2]. Middle [.splice(index, deleteCount)]
Param1 - Index 2 - means starts deleting from index2
Param2 - 3 - how many elements wants to remove starting from index2 */
elements.splice(2,3); 
console.log(elements); //Output : [ '0', 1, 5, '6' ]

/* 
[3]. End [Remove last element]
*/
elements.pop();
console.log(elements); // [ '0', 1, 5 ]

