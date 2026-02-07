"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function xyz(user) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Employed: ${user.isEmployed}`);
}
let emp1 = {
    name: "John",
    age: 30,
    isEmployed: true
};
xyz(emp1);
let emp2 = {
    name: "Jane",
    age: 25,
    isEmployed: false
};
xyz(emp2);
let myCar = {
    make: "Toyota",
    model: "Corolla"
};
console.log(`Car Make: ${myCar.make}, Model: ${myCar.model}, Year: ${myCar.year}`); // year will be undefined
console.log(`Car Make: ${myCar.make}, Model: ${myCar.model}`);
let p1 = { x: 10, y: 20 };
// p1.x = 15; // Error: Cannot assign to 'x' because it is a read-only property
console.log(`Point X: ${p1.x}, Y: ${p1.y}`);
function createBox(box) {
    console.log(box.height);
    console.log(box.width);
}
let myBox = {
    height: 10,
};
//# sourceMappingURL=interface.js.map