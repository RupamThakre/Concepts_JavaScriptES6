let numbers = [1, 2, 3, 4, 5];
let another = numbers;

console.log(numbers);
console.log(another);

//1. only original array will get empty, refereced array will still points to same
numbers = [];
console.log(numbers);
console.log(another);

//2. keeping both objects tobe empty
numbers.length = 0;
console.log(numbers);
console.log(another);

//3. using splice method
numbers.splice(0, numbers.length);
console.log(numbers);
console.log(another);