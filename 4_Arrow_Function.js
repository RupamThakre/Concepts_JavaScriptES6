
const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

const arrowFunction = courses.find((course) => {
    return course.name === 'a';
});

console.log(arrowFunction);

//could be in one line

const singleLine = courses.find(course => course.name === 'a');

console.log(singleLine);