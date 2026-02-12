//Abstract Calss
abstract class Shape {
    abstract getArea(): number;
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super(); // Call the constructor of the abstract class
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea(): number {
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
abstract class Vehicle {
    constructor(public make: string, public model: string) {}
    //Non-abstract method
    getDetails(): string {
        return `Make: ${this.make}, Model: ${this.model}`;
    }
    //Static method
    static getVehicleType(): string {
        return "This is a vehicle.";
    }
}

class Car extends Vehicle {
    constructor(make: string, model: string, public color: string) {
        super(make, model);
    }
}

const car = new Car("Toyota", "Corolla", "Red");
console.log(`Car Make: ${car.make}, Model: ${car.model}, Color: ${car.color}`);
console.log(car.getDetails());
console.log(Vehicle.getVehicleType());
