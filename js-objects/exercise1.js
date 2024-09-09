/*
Create an object representing a person with properties firstName,
lastName, and a method getFullName() that returns their full name.
*/


const person = {
    firstName: 'Nur',
    lastName: 'Ahmed',
    getFullName: function(){
        return `${this.firstName} ${this.lastName}`;
    }
};

console.log(person.getFullName());