//Spread Operator : ES6 

/* 
const first = [1,2,3];
const second = [4,5,6];

// const combined = first.concat(second);

const combined = [...first, ...second];
// adding all individual elements into an Array
// [1,2,3,4,5,6]
// better visuaization

const combined2  = [...first,'a', ...second, 'd', 'e'];

console.log(combined2); 

*/

const element1 = [1,2,3,4,5];
const element2 = ['1','2','3','4','5'];

//[Way-1]
const combinedElement = element1.concat(element2);
console.log(combinedElement);
/* [
  1,   2,   3,   4,   5,
  '1', '2', '3', '4', '5'
] */

// [Way-2]
const combinedElementUsingSpread = [...element1, ...element2];
console.log(combinedElementUsingSpread);

const combinedElementUsingSpreadAdd = [...element2, '6', ...element1, 6];
console.log(combinedElementUsingSpreadAdd);
/* 
[
  '1', '2', '3', '4', '5',
  '6', 1,   2,   3,   4,
  5,   6
]
*/