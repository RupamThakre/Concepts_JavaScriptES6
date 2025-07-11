const numbers = [1, 2, 3, 4];

//adding at the end
numbers.push(5, 6, 7);
console.log(numbers);

//adding at the beginning
numbers.unshift(0, 9);
console.log(numbers);

//adding at the middle
numbers.splice(2, 0, 33, 11);
console.log(numbers);

//deleting one element at the end
numbers.pop();
console.log(numbers);

//deleting one element at the beginning 
numbers.shift();
console.log(numbers);

//deleting element at the middle 
numbers.splice(3, 4);
console.log(numbers);