//Types of Functions

//1. Named Function
function add(a: number, b: number): number {
    return a + b;
}

//2. Anonymous Function
const subtract = function(a: number, b: number): number {
    return a - b;
};

//3. Arrow Function
const multiply = (a: number, b: number): number => {
    return a * b;
};

//4. Function with Optional Parameters
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    } else {        return `Hello, ${name}!`;
    }
}

//5. Function with Default Parameters
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

//6. Function with Rest Parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

//7. Function Overloading
function display(value: string): void;
function display(value: number): void;
function display(value: any): void {
    console.log(value);
}

//8. Function with Generics
function identity<T>(value: T): T {
    return value;
}

//9. Function with Type Assertions
function assertIsNumber(value: any): asserts value is number {
    if (typeof value !== 'number') {
        throw new Error('Value is not a number');
    }
}

//10. Function with Void Return Type
function logMessage(message: string): void {
    console.log(message);
}

//11. Function with Never Return Type
function throwError(message: string): never {
    throw new Error(message);
}

//12. Function with Union Types
function formatValue(value: string | number): string {
    if (typeof value === 'string') {
        return `String: ${value}`;
    } else {        return `Number: ${value}`;
    }}

//13. Function with Intersection Types
interface A {
    a: string;
}
interface B {
    b: number;
}
function combine(obj: A & B): string {
    return `A: ${obj.a}, B: ${obj.b}`;
}

//14. Function with Tuple Types
function processTuple(tuple: [string, number]): string {
    const [name, age] = tuple;
    return `Name: ${name}, Age: ${age}`;
}

//15. Function with Enum Types
enum Color {
    Red,
    Green,
    Blue
}
function getColorName(color: Color): string {    switch (color) {
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

