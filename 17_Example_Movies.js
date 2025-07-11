const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];

// all the movies in 2018 with rating > 4 
// sort them by their rating 
// decending order 
// pick their title

// const result = movies.filter(movie => movie.rating > 4 && movie.year === 2018)
// .sort((a,b)=>{
//   if(a.rating < b.rating) return 1;
//   if(a.rating > b.rating) return -1;
// })
// .map(m =>m.title)

// console.log(result);

const result = movies.filter(m => m.year === 2018 && m.rating >= 4)
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .map(m => m.title)

console.log(result);