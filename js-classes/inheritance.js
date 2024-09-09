// Create a class Animal with a method speak(), and create a subclass Dog that overrides speak().

class Animal{
    speak(){
        return "Animal speaks";
    }
}

class Dog extends Animal{
    speak(){
        return "Dog barks";
    }
}

const dog = new Dog();
console.log(dog.speak());