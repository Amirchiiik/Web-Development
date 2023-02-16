let calculator = {
    read() {
        this.a = prompt('','');
        this.b = prompt('','');
    },
    sum() {
        return +this.a+ +this.b;
    },
    mul() {
        return this.a * this.b;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );