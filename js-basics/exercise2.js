// Write a function that checks if a string is a palindrome.

function pal(str){
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    return cleanStr === cleanStr.split('').reverse().join('');
}

console.log(pal("Madam"));
console.log(pal("Hello"));