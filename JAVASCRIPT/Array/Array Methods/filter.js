let num = [2, 3, 6, 5, 7, 9, 1, 8, 4];

let even = num.filter( (evnum) => {
    return (evnum % 2 == 0);
})

console.log(even);

let odd = num.filter( (odnum) => {
    return odnum % 2 != 0 ;
})

console.log(odd);