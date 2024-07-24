let student = {                             // Here student is an object.
    name : 'Harshal',   
    age : 22,
    marks : 99.99,
    display: ()=>{
        console.log(this.name + " " + this.age);
        
    }
}
console.log(student);      

console.log(student.display);

console.log(student.display());

