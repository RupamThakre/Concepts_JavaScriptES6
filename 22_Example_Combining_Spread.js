
const first = [1, 2, 3];
const second = [4, 5, 6];

//1. using concat method
const combined = first.concat(second);
console.log(combined);

//2. using Spread opeartor
const spreadOperator = [...first, ...second, 'a', 'b'];
console.log(spreadOperator);
