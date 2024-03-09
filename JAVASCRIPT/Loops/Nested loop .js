
// let n = 5;
// let h ="";

// for (i=1; i<=n; i++){    
//     for (j=1; j<=n-i+1; j++){
//         h +=n-j - i +2 ;
//         // console.log("i = " + i + ", j = " + j);
//     }
//     h += "\n";
//     // console.log("this is in i = "+i);
// }
// console.log(h);


// print table of no in in this way "10 X 1 = 10"

// for (var i=1; i<=10; i++){
//     console.log("Table of " +i);
//     for (var j=1; j<=10; j++){
//         var table = i + " X " + j + " = " +(j*i);
//         console.log(table);
//     }
// }

let n = 5;
string = "";
for (i=0; i<n; i++){
    for(k=0; k<n-i; k++){
        string += "*";
    }
    string += "\n";
}
console.log(string);