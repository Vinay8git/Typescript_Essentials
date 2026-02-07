//Other Data Types

//Any
let num = 5;
console.log(num);

let str : any = 5;
str = "Hello";
console.log(str);
console.log(typeof str);

let char = str.toUpperCase(); //No Error
console.log(char);


//Unknown
let val : unknown = 5;
val = "Hello Unknown";
console.log(val);
console.log(typeof val);
//console.log(val.toUpperCase()); //Error

if (typeof val === "string") {
    console.log(val.toUpperCase());
}
if (typeof val === "number") {
    console.log(val+5);
}