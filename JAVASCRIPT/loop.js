// // print Hello World! 100 times
// for (let count=1; count<=100; count++)
// {
//     console.log("Hello World!");

// }          
// console.log('-------------------------------');   


// // print 1 to 10
// for (let i=1; i<=10; i++){
//     console.log(i);  
// }
// console.log('-------------------------------');


// // odd numbers
// for (let i=1; i<=10; i=i+2)
// {
//     console.log(i);  
// }
// console.log('-------------------------------');

// // even numbers
// for (let j = 2 ;j <=50; j+=2){
//     console.log(j);
// }
// console.log('-------------------------------');


// // print 10 to 1

// for (let a=10; a>=1; a--)
// {
//     console.log(a);
// }
// console.log('-------------------------------');


// for (let i=1; i<=5; i++){
//     console.log("Harshal");
// }


// print star pattern

// calculate sum of 1 to 5
// let sum = 0;
// for (i = 1; i<=5; i++){
//     sum = sum + i;
//     console.log(sum);
// }

// console.log("Sum = ",+sum);
// console.log("Loop has Ended");


//infinite  looopp
// for (i=1; i>=0; i++){
//     console.log('i=',+i);
// }

// // while loop

// let i=1;
// while(i<=5){
//     console.log("i=",+i);
//     i++;
// }


// // do-while-loop

// let i=1;
// do{
//     console.log("Harshal Puri");
//     i++;
// }
// while(i<=10);

// console.log("Loop has ended")


// for-of loop

// let str = "java";

// for (let i of str ){
// //     //iterator characters
// //     console.log(i);
// // }


// let str = "Javascript";
// let size = 0;

// for (let i of str ){
//     //iterator characters
//     console.log(i);
//     size++;

// }
// console.log('String size =',size);




// for in loop
// let student= {
//     name : "Harshal Puri",
//     age : 20,
//     cgpa : 6.91,
//     isPass : true,

// };
// for (let key in student){
//     console.log( key, student[key] );

// }




// print all even  numbers from 0 to 100

// for (let i = 0; i<=100; i+=2){
//     console.log(i);
// }


// for (let num=0; num<=100; num++)
// {
//     if (num%2===0){
//         console.log(num);
//     }
// }





// game - guessing number

let gameno= 25;
let userno= prompt("guess the game no ");
while (userno != gameno){
  userno =  prompt("You entered wrong no. Guess again");
}
console.log("Congratulations! You Entered the right no:", gameno);

// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('What is your name? ', (name) => {
//     console.log(`Hello, ${name}!`);
//     readline.close();
//   });
  








