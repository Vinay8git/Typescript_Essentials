//Interfaces are used to define the structure of an object
interface Person {
    name: string;
    age: number;
    isEmployed: boolean;
}

function xyz(user: Person){
    console.log(`Name: ${user.name}, Age: ${user.age}, Employed: ${user.isEmployed}`);
}

let emp1: Person = {
    name: "John",
    age: 30,
    isEmployed: true
};

xyz(emp1);

let emp2 ={
    name: "Jane",
    age: 25,
    isEmployed: false
}
xyz(emp2);

//Optional Properties in Interface
interface Car {
    make: string;
    model: string;
    year?: number; //Optional Property
}

let myCar: Car = {
    make: "Toyota",
    model: "Corolla"
};

console.log(`Car Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`); // year will be undefined
console.log(`Car Make: ${myCar.make}, Model: ${myCar.model}`);

//Readonly Properties in Interface
interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 15; // Error: Cannot assign to 'x' because it is a read-only property
console.log(`Point X: ${p1.x}, Y: ${p1.y}`);

//Extending Interfaces
interface Employee extends Person {
    employeeId: number;
}




//Merging Interfaces

interface Box {
    height: number;
}

interface Box {
    width: number;
}

function createBox(box: Box) {
    console.log(box.height);
    console.log(box.width);
}

let myBox = {
    height: 10,
};
