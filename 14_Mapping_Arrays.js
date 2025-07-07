// Mapping an Array

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(n => n >= 0);

const items = filtered.map(n => n * n);

console.log(items.join('**'));