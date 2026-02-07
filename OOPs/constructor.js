"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Constructor in TypeScript
class User {
    name;
    age;
    constructor(naam, umar) {
        this.name = naam;
        this.age = umar;
    }
}
let u1 = new User("Vinay", 25);
console.log(u1);
//Second Way to write Constructor
class Device {
    name;
    price;
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}
let d1 = new Device("Laptop", 50000);
console.log(d1);
//Third Way to write Constructor
class Car {
    name;
    price;
    color;
    constructor(name, price, color = "White") {
        this.name = name;
        this.price = price;
        this.color = color;
    }
}
let c1 = new Car("Toyota", 50000);
let c2 = new Car("Honda", 60000, "Black");
console.log(c1);
console.log(c2);
//# sourceMappingURL=constructor.js.map