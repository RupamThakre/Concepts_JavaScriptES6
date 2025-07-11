const first = [1,2,3];
const second = [4,5,6];

const combined = first.concat(second);
console.log(combined);  //[ 1, 2, 3, 4, 5, 6 ]

//slice - extracting required array elements

//[1] .slice(fromIndex, toIndex)
const slice = combined.slice(2, 4);

//[2] .slice(fromIndex) - return array starting from index 2 
const slice2 = combined.slice(2);

//[3] .slice() - will return new array 
const slice3 = combined.slice();

console.log(slice);  // [ 3, 4 ]
console.log(slice2); // [ 3, 4, 5, 6 ]
console.log(slice3); // [ 1, 2, 3, 4, 5, 6 ]