const students = {
    name: "Harshal",
    marks: 99,
    property: this,
    getName: function () {   // Here the meaning of this keyword is globle scope
        console.log(this);
        return this.name;
    },

    getamarks: () => {       // Here the meaning of this keyword is Parent's scope
        console.log(this);
        return this.marks;
    },


    getInfo1: function () {
        setTimeout(() => {      // Here in the Arrow function this keyword represents the parent's scope that is object 'students'.  
            console.log(this);
        }, 2000);
    },

    getInfo2: function () {
        setTimeout(function () { // Here in normal function this keyword represents the globle scope  that is object 'window'. 
            console.log(this);
        }, 3000);
    }
};




