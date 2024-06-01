/* ForEach method using array of integers*/
// let arr = [1, 2, 3, 4, 5];

// arr.forEach( function (el){
//     console.log(el);
// });


// arr.forEach( (el) => {
//     console.log(el);
// });


// let print = function ( el ){
//     console.log(el);
// };

// arr.forEach(print);




/* ForEach method using array of object */

let arr = [{
    name: "Harshal",
    marks: 99,
}, {
    name: "Jay",
    marks: 95,
}, {
    name: "Harry",
    marks: 90,
},];

arr.forEach( (student) => {
    console.log(student.marks);
});