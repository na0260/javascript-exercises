/*
Create an object person with properties firstName and lastName. Use a getter to
return the full name, and a setter to update the first name and last name together.
*/

let person = {
    firstName: 'Nur',
    lastName: 'Ahmed',

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    set fullName(name){
        [this.firstName, this.lastName] = name.split(' ');
    }
}

console.log(person.fullName);
person.fullName = 'Ahmed Nur';
console.log(person.fullName);