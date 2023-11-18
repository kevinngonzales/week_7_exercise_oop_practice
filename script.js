// Write a JavaScript program that creates a class called 'Shape' with a method to calculate the area. Create two subclasses, 'Circle' and 'Triangle', that inherit from the 'Shape' class and override the area calculation method. Create an instance of the 'Circle' class and calculate its area. Similarly, do the same for the 'Triangle' class.

class Shape {
  constructor(base, height) {
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    let area = base * height;
    return area;
  }
}


class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  calculateArea() {
    let area = 3.14 * (this.radius * this.radius);
    return area;
  }
}


class Triangle extends Shape {
  constructor (base, height) {
    super();
    this.base = base;
    this.height = height;
  }
  calculateArea() {
    let area = 0.5 * (this.base * this.height);
    return area;
  }
}



const circle = new Circle(2);
console.log(circle.calculateArea());

const triangle = new Triangle(4,8);
console.log(triangle.calculateArea());