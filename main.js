class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  introduce() {
    return `Hello, My name is ${this.name}, I am ${this.age} years old.`;
  }
}

const goga = new Person("Goga", 25, "Male");
const mariam = new Person("Mariam", 28, "Female");

let userOne = document.getElementById("userOne");
userOne.innerHTML = goga.introduce();

let userTwo = document.getElementById("userTwo");
userTwo.innerHTML = mariam.introduce();

//

class Shape {
  constructor(type) {
    this.type = type;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("Circle");
    this.radius = radius;
  }
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super("Rectangle");
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(100);
let outPutCircle = document.getElementById("circle");

outPutCircle.style.width = `${circle.radius * 2}px`;
outPutCircle.style.height = `${circle.radius * 2}px`;

let typeOfCircle = document.createElement("span");
typeOfCircle.innerHTML = `${circle.type}<br>${circle.radius} Radius`;

outPutCircle.appendChild(typeOfCircle);

//
const rectangle = new Rectangle(200, 120);
let outPutRectagle = document.getElementById("rectangle");

outPutRectagle.style.width = `${rectangle.width}px`;
outPutRectagle.style.height = `${rectangle.height}px`;

let typeOfRectangle = document.createElement("span");
typeOfRectangle.innerHTML = `${rectangle.type}<br>Width: ${rectangle.width}<br>Height: ${rectangle.height} `;

outPutRectagle.appendChild(typeOfRectangle);
