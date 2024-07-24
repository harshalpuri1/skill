// function multipleGreet (func , count){ // Higher Order Function
//     for (i=1; i<=count; i++){
//         func ();
//     }
// }

// let greet = function (){
//     console.log("Harshal Puri");
// }

// multipleGreet(greet , 500);




function odd_evenFactory (request){
    if (request == "odd"){
        return function (n){
            console.log(!(n%2 == 0));
        }


        
    }

    else if (request == "even"){

        return function (n){
            console.log(n%2 == 0);
        }
 
    }

    else {
        console.log("Wrong Request");
    }
}

let request = "odd";