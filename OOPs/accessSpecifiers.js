"use strict";
//Public 
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
}
let p1 = new Person("Alice", 30);
console.log(p1.getName());
console.log(p1.getAge());
p1.name = "Bob"; // Allowed
console.log(p1.getName());
//Private
class Employee {
    id;
    salary;
    constructor(id, salary) {
        this.id = id;
        this.salary = salary;
    }
    getId() {
        return this.id;
    }
    getSalary() {
        return this.salary;
    }
}
class Staff extends Employee {
    getPrivateId() {
        // return this.id; // Error: Property 'id' is private and only accessible within class 'Employee'
        return 0;
    }
}
let e1 = new Employee(101, 50000);
console.log(e1.getId());
console.log(e1.getSalary());
// e1.id = 102; // Error: Property 'id' is private and only accessible within class 'Employee'
// console.log(e1.id); // Error: Property 'id' is private and only accessible within class 'Employee'
//Protected
class Manager {
    department;
    constructor(department) {
        this.department = department;
    }
    getDepartment() {
        return this.department;
    }
}
class SeniorManager extends Manager {
    getProtectedDepartment() {
        return this.department; // Accessible within subclass
    }
}
let m1 = new SeniorManager("Sales");
console.log(m1.getProtectedDepartment());
// console.log(m1.department); // Error: Property 'department' is protected and only accessible within class 'Manager' and its subclasses
// m1.department = "Marketing"; // Error: Property 'department' is protected and only accessible within class 'Manager' and its subclasses
//# sourceMappingURL=accessSpecifiers.js.map