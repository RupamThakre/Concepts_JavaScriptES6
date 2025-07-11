// Filtering Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function (value) {
    return value >= 0;
});

const filteredN = numbers.filter(a => a >= 0);

console.log(filteredN);