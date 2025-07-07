// Testing elements of Array 

const numbers = [1, -1, 2, 3];

const allPositive = numbers.every(function (value) {
    return value >= 0;
});

console.log(allPositive);  //false

/* every ,method not runs on every element of the Array
in above numbers once it got -1 , stop searching element present after it

there is one some method  */

const atLeastOnePositive = numbers.some(function (value) {
    return value >= 0;
});

console.log(atLeastOnePositive); //true