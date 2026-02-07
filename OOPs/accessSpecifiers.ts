//Public 

class Person {
    public name: string;
    public age: number; 

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;     
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
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
    private id: number;
    private salary: number;         

    constructor(id: number, salary: number) {
        this.id = id;
        this.salary = salary;       
    }
    public getId(): number {
        return this.id;
    }
    public getSalary(): number {
        return this.salary;
    }

}
class Staff extends Employee {
    public getPrivateId(): number {
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
    protected department: string;

    constructor(department: string) {
        this.department = department;       
    }
    public getDepartment(): string {
        return this.department; 
    }
}

class SeniorManager extends Manager {
    public getProtectedDepartment(): string {
        return this.department; // Accessible within subclass
    }
}
let m1 = new SeniorManager("Sales");
console.log(m1.getProtectedDepartment());
// console.log(m1.department); // Error: Property 'department' is protected and only accessible within class 'Manager' and its subclasses
// m1.department = "Marketing"; // Error: Property 'department' is protected and only accessible within class 'Manager' and its subclasses
