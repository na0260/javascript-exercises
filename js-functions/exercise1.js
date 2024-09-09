// Write a function that accepts another function as an argument and calls it twice.

function call2(fn){
    fn();
    fn();
}

function sayHello(){
    console.log("Hello!");
}

call2(sayHello);