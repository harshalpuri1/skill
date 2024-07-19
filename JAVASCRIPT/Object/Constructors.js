// let student = {                             // Here student is an object.
//     name : 'Harshal',   
//     age : 22,
//     marks : 99.99,
//     display: ()=>{
//         console.log(this.name + " " + this.age);
        
//     }
// }

function Students(name, age, marks){
    this.name = name;
    this.age = age;
    this.marks = marks;
}

let Students2 = new Students ("Janhavi", 8, 99);   // Here we create a new object with name Student2  
console.log(Students2);