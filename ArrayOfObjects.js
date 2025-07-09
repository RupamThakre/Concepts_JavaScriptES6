let users = [
    { id: 1, name: "Ali", age: 12 },
    { id: 2, name: "Baba", age: 13 },
    { id: 3, name: "Cipher", age: 14 }
];

console.log(users);

//1. Adding new user - END
users.push({ id: 4, name: "David", age: 16 });
console.log(users);

//2. Adding new user - START
users.unshift({ id: 0, name: "First", age: 11 });
console.log(users);

//3. Adding new user - MIDDLE
users.splice(1, 0, { id: 5, name: "Middle", age: 17 });
console.log(users);