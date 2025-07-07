//1. beginning : unshift
//2. middle    : slice(start, deleteCount, ...items)
//3. end       : push

const elements = [1,'a'];

// Add at the end
elements.push('b',2,'c',3,'d');

console.log(elements);

//Add in the beginning
elements.unshift(0,'0');

console.log(elements);

//Add in the middle (Splice - Index, deleteCount, ...items)
elements.splice(2,0,'z','y','x');

console.log(elements);


