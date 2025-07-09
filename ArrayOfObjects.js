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

//4. Fetch user with id=1
let user = users.find(user => user.id === 1);
console.log(user);

//5. Fetch user with name="Baba"
let user1 = users.find(user => user.name === "Baba");
console.log(user1);

//6. Fetch user with age=14
let user2 = users.find(user => user.age === 14);
console.log(user2);

//7. Fetch index of user whose age is 13
let index = users.findIndex(user => user.age === 13);
console.log(index);

//8. Updating user with id=2
const findIndex = users.findIndex(user => user.id === 2);
if (findIndex !== -1) {
    users[findIndex] = { ...users[findIndex], name: "updated", age: 33 };
}
console.log(users);

//9. Updating user with id =3
users[2] = { ...users[2], age: 44 };
console.log(users);

