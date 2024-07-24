const student = {
    name : "Harshal",
    Roll_No : 9,
    Age: 22,
    Marathi : 99,
    Hindi : 99,
    English : 90,
    Math: 100,
    Science: 95,

    get_avg() {
        let avg = (this.Marathi + this.Hindi + this.English + this.Math + this.Science) / 5;
        console.log(avg);
    }
} 