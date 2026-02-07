//Type Aliases

type sankhya = number;

let num: sankhya = 42;
console.log(`The number is: ${num}`);

//Union Types with Type Aliases
type sn = number | string;

let data: sn;
data=100;
console.log(`Data as number: ${data}`);
data="TypeScript";
console.log(`Data as string: ${data}`);

//Function with Type Alias
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
console.log(`Sum of 5 and 10: ${add(5, 10)}`);

//Intersection Types with Type Aliases
type Person = {
    name: string;
    age: number;
};

type Employee = {
    employeeId: number;
};

type FullTimeEmployee = Person & Employee;

const emp1: FullTimeEmployee = {
    name: "John",
    age: 30,
    employeeId: 1,
};
console.log(`Employee Name: ${emp1.name}, Age: ${emp1.age}, ID: ${emp1.employeeId}`);

//Intersection Types with Type Aliases

type User = {
    username: string;
}

type Admin = User & {
    adminLevel: number;
}

const admin1: Admin = {
    username: "adminUser",
    adminLevel: 5,
};
console.log(`Admin Username: ${admin1.username}, Level: ${admin1.adminLevel}`);

//Type Alias for Tuple
type Point = [number, number];
let p1: Point = [10, 20];
console.log(`Point X: ${p1[0]}, Y: ${p1[1]}`); 