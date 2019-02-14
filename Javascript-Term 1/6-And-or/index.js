var a = true;
var b = true;
var c = false;
var d = false;

// And (&&)
// If at least one value is false, the result will be false
console.log(a && b); // true and true = true
console.log(a && c); // true and false = false
console.log(c && d); // false and false = false

// Or (||)
// If at least one value is true, result will be true
console.log(a || b); // true and true = true
console.log(a || c); // true and false = true
console.log(c || d); // false and false = false
