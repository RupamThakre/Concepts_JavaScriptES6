//Reducing Arrays


const numbers = [1, -1, 2, 3];

// let sum = 0;

// for(let n of numbers){
//   sum = sum + n;
// }

// console.log(sum);


const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

// 2nd Argument - initial value of accumulator
//a = 0, c = 1 => a=1
//a = 1, c = -1 => a= 0
console.log(sum);

