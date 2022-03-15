// function with parameters
// write keyword function to intialise the function//
function sum(a, b) {
    let add = a + b;
    return add;
}
console.log(sum(4, 5));
console.log(sum(6, 7));
// function without parameter
function sayhello() {
    console.log("hello");

}


sayhello();
// storing function 
let a = function sum(d, e) {
    let di = d + e;
    return di;
}
console.log(a(5, 7));