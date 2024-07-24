// let num = [1, 2, 3, 4, 5];

// let double = num.map((el) => {
//    return el**3;
// });   
// console.log(double);

// 

let students = [{
    name: "Harshal",
    marks: 99,
}, {  
    name: "Jay",
    marks: 95,
}, {
    name: "Harry",
    marks: 90,
},];

let gpa = students.map((el) => {
    return el.marks/10 ;    
});

// console.log(gpa);