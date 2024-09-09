// Write a function that uses recursion to sum all numbers up to a given number.

function sum(n){
    if (n === 0)
        return 0;
    else
        return n + sum(n-1);
}

console.log(sum(5));