// let marks = [91,20,55,33,99,100];
// console.log(marks);
// console.log(marks.length);

// let heroes = ['Harshal', 'Ironman','Spiderman', 'Batman']
// console.log(heroes);


// for (var i = 0; i<=10; i++)
// {
//     console.log(i);
// }

// Arrays 

var students = ["Ajay", ,"Sham", "Ram"];
console.log(students);

console.log(students.length);

console.log(students[0]);

students[students.length]='raj';
console.log(students);





var employees = new Array();
employees[0] = "Harry";
employees[1] = "Potter";
employees[2] = "Kunal";
console.log(employees);
console.log(employees.length);

employees.push("Dhebra");               // push method it adds an element at the end of an array.
console.log(employees);
console.log(employees.length);

console.log(employees.pop());           // pop method  it removes last element of an array and return the last element.
console.log(employees);

var subjects = new Array("Marathi", "Hindi", "English");
console.log(subjects);
console.log(subjects.length);

console.log(subjects.shift());          //  shift method it removes first element of an array and return the first element
console.log(subjects);

subjects.unshift("Marathi", "Math" );   //  unshift method it adds an element from the start.
console.log(subjects);



let new_array = students.concat(employees);  // concat method is used to merge an array and it returns a new array.
console.log(new_array);

new_array.sort();                       // sort method which sorts an array and updates the same array.
console.log(new_array);


console.log(Array.isArray(new_array)); // isArray method checks whether the given array is an array.


console.log(new_array.indexOf("Kunal"));



// for (i=0; i<new_array.length; i++){             // for loop 
//     alert(new_array[i]);
//     console.log(new_array[i]);
// }


for (let student of new_array ){         // for each loop in array
    console.log(student);
}


console.log(new_array.slice(1));