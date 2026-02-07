// Constructor in TypeScript
class User {
    name: string;
    age: number;

    constructor(naam: string, umar: number) {
        this.name = naam;
        this.age = umar;
    }
}

let u1 = new User("Vinay", 25);
console.log(u1);


//Second Way to write Constructor
class Device {
    constructor(public name: string, public price: number) {

    }
}

let d1 = new Device("Laptop", 50000);
console.log(d1);


//Third Way to write Constructor
class Car {
    constructor(public name: string, public price: number, public color: string = "White") {     //Giving Default Value to Variable

    }
}

let c1 = new Car("Toyota", 50000);
let c2 = new Car("Honda", 60000, "Black");
console.log(c1);
console.log(c2);