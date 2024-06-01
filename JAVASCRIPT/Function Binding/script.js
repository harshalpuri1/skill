let animal = {
    name : "Lion",
    colour : "Yellow",  
    print : function () {
    console.log(this.name +" "+ this.colour);
    }

}


let bird = { 
    name : "Parrot",
    colour : "Green"
}

// let print_animal = print.bind(animal);
let print_bird = animal.print.bind(bird);

// print_animal();
animal.print(); 
print_bird();












// console.log(animal);
// console.log(animal.name);
// console.log(animal.colour);