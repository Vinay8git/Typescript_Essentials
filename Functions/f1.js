"use strict";
//Types of Functions
Object.defineProperty(exports, "__esModule", { value: true });
//1. Named Function
function add(a, b) {
    return a + b;
}
//2. Anonymous Function
const subtract = function (a, b) {
    return a - b;
};
//3. Arrow Function
const multiply = (a, b) => {
    return a * b;
};
//4. Function with Optional Parameters
function greet(name, greeting) {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    else {
        return `Hello, ${name}!`;
    }
}
//5. Function with Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
//6. Function with Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function display(value) {
    console.log(value);
}
//8. Function with Generics
function identity(value) {
    return value;
}
//9. Function with Type Assertions
function assertIsNumber(value) {
    if (typeof value !== 'number') {
        throw new Error('Value is not a number');
    }
}
//10. Function with Void Return Type
function logMessage(message) {
    console.log(message);
}
//11. Function with Never Return Type
function throwError(message) {
    throw new Error(message);
}
//12. Function with Union Types
function formatValue(value) {
    if (typeof value === 'string') {
        return `String: ${value}`;
    }
    else {
        return `Number: ${value}`;
    }
}
function combine(obj) {
    return `A: ${obj.a}, B: ${obj.b}`;
}
//14. Function with Tuple Types
function processTuple(tuple) {
    const [name, age] = tuple;
    return `Name: ${name}, Age: ${age}`;
}
//15. Function with Enum Types
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
function getColorName(color) {
    switch (color) {
        case Color.Red:
            return 'Red';
        case Color.Green:
            return 'Green';
        case Color.Blue:
            return 'Blue';
        default:
            return 'Unknown';
    }
}
//# sourceMappingURL=f1.js.map