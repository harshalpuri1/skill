let arr = [9,4,6,3,2,1];

function sort(arr)
{
    let n = arr.length;
    for (let i=1; i<=n-1; i++){
        for (let j=1; j<=n-i; j++){
            if ( arr [j-1] > arr [j]){
                //swap
                let b = arr[j-1];
                arr [j-1] = arr [j];
                arr [j] = b;

            }
        }
    }
}

sort(arr);
console.log(arr);