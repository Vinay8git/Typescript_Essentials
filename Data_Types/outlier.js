"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Assigning two different types to a single variable
let val;
val = 5;
val = "Hello";
console.log(val);
val += 5; //Concatenation since last assigned type is string
console.log(val);
// val = true; //Error
//Detecting the type of variable at runtime
console.log(typeof val);
let num = 5;
num = true;
console.log(num);
//# sourceMappingURL=outlier.js.map