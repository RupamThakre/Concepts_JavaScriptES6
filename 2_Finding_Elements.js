//[1]   .indexOf()
//[2]   .lastIndexOf()
//[3]   .includes()

// numbers.indexOf(1) !== -1
// numbers.includes(1);

const numbers = [1, 2, 3, 1, 4];

console.log(numbers.indexOf(3)); //2

console.log(numbers.lastIndexOf(1)); //3

console.log(numbers.indexOf(1) !== -1); //true

console.log(numbers.includes(1)); //true