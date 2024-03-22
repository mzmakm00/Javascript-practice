function getType(value){
    return typeof value;
}

console.log(getType(42));                       // Output: "number"
console.log(getType("Hello"));                  // Output: "string"
console.log(getType(true));                     // Output: "boolean"
console.log(getType({}));                       // Output: "object"
console.log(getType(function(){}));             // Output: "function"
console.log(getType(undefined));                // Output: "undefined"