/*
Create a class Rectangle that takes width and height in its
constructor and has a method getArea() to calculate the area.
*/

class Rect{
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

const rect = new Rect(10, 20);
console.log(rect.getArea());