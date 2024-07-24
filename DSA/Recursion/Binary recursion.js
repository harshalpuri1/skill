function binarySearch(arr,target,s,e){
    if (s>e)
        return -1;

        let m = Math.floor((s+e)/2);

        if (target == arr [m])
        return m;

        else if (target < arr [m])
        return binarySearch(arr,target,s,m-1);
        
        else
        return binarySearch(arr,target,m+1,e);
        

}

let arr = [2,3,5,7,9,10];
let target = 9;
let n = arr.length;
console.log(binarySearch(arr,target,0,n-1));