/**
 * Classes
 *
 *  - Classes are a really interesting wrapper around JavaScript's Object model
 *    - mixup own properties and prototypes
 *  - methods vs static methods
 *  - class hierarchies and the prototype chain
 */

class Person {
  constructor(firstName, lastName, title) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
  }

  static genericGreeting() {
    return "Hello, nice to meet you. Wonderful weather we're having.";
  }

  greeting() {
    return `Hello, my name is ${this.firstName}, nice to meet you.`;
  }

  formalGreeting() {
    return `Hello, my name is ${this.title} ${this.lastName}, it's a pleasure.`;
  }
}

const colin = new Person('Colin', 'DeCarlo', 'Mr.');

console.log(colin.greeting());
console.log(colin.formalGreeting());

console.log(Object.getOwnPropertyNames(colin));

const colinsPrototype = Object.getPrototypeOf(colin);
console.log(Object.getOwnPropertyNames(colinsPrototype));

console.log(colin.hasOwnProperty('firstName'));
console.log(colin.hasOwnProperty('greeting'));

console.log(Person.genericGreeting());
console.log(Object.getOwnPropertyNames(Person));

console.log(Object.getPrototypeOf(colin) === Person.prototype);

class Vehikalian extends Person {
  constructor(firstName, lastName, title, team) {
    super(firstName, lastName, title);

    this.team = team;
  }

  rallyCry() {
    return `${this.team} is the best!`;
  }
}

const quinn = new Vehikalian('Jane', 'Doe', 'Ms.', 'Fuego');

console.log(quinn.rallyCry());
console.log(quinn.greeting());

const janesPrototype = Object.getPrototypeOf(quinn);
console.log(janesPrototype);
console.log(Object.getOwnPropertyNames(janesPrototype));

let thePrototypeOfJanesPrototype = Object.getPrototypeOf(janesPrototype);
console.log(Object.getOwnPropertyNames(thePrototypeOfJanesPrototype));

console.log(Object.getPrototypeOf(colin) === thePrototypeOfJanesPrototype);
