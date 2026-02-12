"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Abstract Calss
class Shape {
}
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super(); // Call the constructor of the abstract class
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
const rectangle = new Rectangle(5, 10);
console.log(`Area of Rectangle: ${rectangle.getArea()}`);
const circle = new Circle(3);
console.log(`Area of Circle: ${circle.getArea()}`);
//Abstract Class cannot be instantiated
// const shape = new Shape(); // Error: Cannot create an instance of an abstract class.
//Abstract Class can have abstract and non-abstract methods
//Abstract Class can have properties and constructors
//Abstract Class can have static methods
//Constructors in Abstract Class
class Vehicle {
    make;
    model;
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    //Non-abstract method
    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
    //Static method
    static getVehicleType() {
        return "This is a vehicle.";
    }
}
class Car extends Vehicle {
    color;
    constructor(make, model, color) {
        super(make, model);
        this.color = color;
    }
}
const car = new Car("Toyota", "Corolla", "Red");
console.log(`Car Make: ${car.make}, Model: ${car.model}, Color: ${car.color}`);
console.log(car.getDetails());
console.log(Vehicle.getVehicleType());
//# sourceMappingURL=abstractClass.js.map