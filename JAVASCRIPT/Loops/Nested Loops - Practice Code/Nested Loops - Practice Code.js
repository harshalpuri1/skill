/* Problem Statement 1: Nested For Loops
 Create a JavaScript program that displays the value of inner for loop for each outer iteration, aswell as outer for loop.*/

// for (i = 1; i<=5; i++){
//     console.log(i);
//     let str = "";
//     for (j=1; j<=5; j++){
//         str += j;
//     }
//     console.log(str);

// }
/* Output
1
12345
2
12345
3
12345
4
12345
5
12345 */

/* Problem Statement 2: Tables using nested for loopPrint tables using nested for loop */

// let n = 3;
// let table = "";
// for (i=1; i<=n; i++){
//     console.log("Table of "+i);
//     for (j=1; j<=10; j++){
//         table = i + " X " + j + " = " +(j*i) ;
//         console.log(table);
//     }
//     console.log("\n");
// }


/*Problem Statement 3: Triangle numbersWrite a JavaScript program to display a triangle of numbers using a nested for loop.*/

// let n = 5;

// for (i=1; i<=n; i++){
//     let triangle="";

//     for (j=1; j<=i; j++){
//         triangle += j;
//     }
//     console.log(triangle);
// }

/*Output
1
12
123
1234
12345*/

/*Problem Statement 4: Right Triangle patternCreate a JavaScript program to display the right triangle pattern of numbers.*/

let n=5;

for (i=1; i<=n; i++){
    let r="";

    for (j=1; j<=i; j++){
        r += i;

    }
    console.log(r);
}
/*Output
1
22
333
4444
55555
*/
