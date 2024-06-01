
// let arr = [5, 2, 1, 4, 3];
// arr.sort(); // --.sort is the ready made function in javascript  which sorts an array in ascending order.
// console.log(arr.length);
// console.log(arr);




// 01) Bubble Sort Algorithm

let arr = [7, 3, 2, 5, 1, 4] 
function bubbleSort(arr){
    let n = arr.length ;
    for (let i=1; i<=n-1; i++ ) {  //loops for each passes
        for (let j=1; j<=n-i; j++){ 
            if (arr [j-1] > arr[j]){   // Comparing adjacent elements in pass 
                // swapping
                let  temp = arr [j-1] ;
                arr [j-1]=arr[j];
                arr[j]=temp;

                
            }
        }
    }

}
bubbleSort(arr);
console.log("Bubble sort : ");
console.log(arr);


function sort(arr){
    let n = arr.length;
    for (let i=1; i<=n-1; i++){
        for (let j=1; j<=i; j++){
            if (arr [j-1] > arr[j]){
                let temp = arr[j-1];
                arr[j-1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}




















































// // Bubble sort algorithm

// let arr = [0,9,10,9,2,8,6,7,3,5,1,4];

// function bubble(arr){
//     let n = arr.length;

//     for ( let i=1; i<=n-1; i++){
//         for (let j=1; j<=n-i; j++){
//             if (arr[j-1] > arr[j]){
//                 let x= arr[j-1];
//                 arr[j-1] = arr[j];
//                 arr[j]= x;
//             }
       
//         }
//     }
// }
// bubble(arr);
// console.log(arr);





// Selection Sort 

function selectionSort(arr){
    for
}

arr = [5,1,4,2,3];
