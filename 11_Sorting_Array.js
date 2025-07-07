//Sorting Elements

//[1] - Sorting Arrays

const numbers = [2, 3, 1];

// convert each element into string and sort the Array

numbers.sort();
console.log(numbers);  //[ 1, 2, 3 ]

numbers.reverse();
console.log(numbers);  //[ 3, 2, 1 ]

//[2] - Soring Array Of Objects

const courses = [
    { id: 1, name: 'Aode.js' },
    { id: 2, name: 'BavaScript' }
];

courses.sort(function (a, b) {
    // a<b => -1
    // a>b => 1 
    // a === b => 0

    // const nameA = a.name.toUpperCase();
    // const nameB = b.name.toUpperCase();

    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    if (a.name === b.name) return 0;
})

console.log(courses); //[ { id: 1, name: 'Aode.js' }, { id: 2, name: 'BavaScript' } ]


const students = [
    { id: 1, name: 'D' },
    { id: 3, name: 'E' },
    { id: 2, name: 'A' },
    { id: 5, name: 'G' }
];

/*
students.sort(); //no sorting
console.log(students);
 
[
  { id: 1, name: 'D' },
  { id: 3, name: 'E' },
  { id: 2, name: 'A' },
  { id: 5, name: 'G' }
]
*/

students.sort(function (a, b) {
    if (a.name > b.name) { return 1; }
    if (a.name < b.name) { return -1; }
    if (a.name === b.name) { return 0; }
});
console.log(students);

/* 
[
  { id: 2, name: 'A' },
  { id: 1, name: 'D' },
  { id: 3, name: 'E' },
  { id: 5, name: 'G' }
]
*/

students.sort((a, b) => {
    if (a.id > b.id) return 1;
    if (a.id < b.id) return -1;
    if (a.id === b.id) return 0;
})

console.log(students);

/* 
[
  { id: 1, name: 'D' },
  { id: 2, name: 'A' },
  { id: 3, name: 'E' },
  { id: 5, name: 'G' }
]
*/