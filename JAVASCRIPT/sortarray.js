
function sort(array){

    let n = array.length;

    for (let i = 0; i<n-1; i++){
        for(let j =0; j< n-i-1;j++){
            if(array[j] > array[j+1]){
                let temp = numbers[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }
    return array;
}
let numbers = [5,3,8,2,9];
sort(numbers);
console.log(numbers);
