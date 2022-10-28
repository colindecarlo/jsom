/**
 * Objects can inherit behaviour from other objects
 *    - prototypal inheritance
 *    - prototype chain
 *      - property lookup
 *      - shadowing
 *    - own properties
 *    - prototypes are shared
 */

const someObject = {
  someString: 'foo',
  someMethod: function () {
    return this.someString
  }
}

const someObjectsPrototype = Object.getPrototypeOf(someObject);

console.log(someObjectsPrototype);

console.log(Object.getOwnPropertyNames(someObjectsPrototype));
console.log(someObject.toString());

const aDifferentPrototype = {
  someNumber: 42,
  somePrototypeMethod: function () {
    return this.someNumber + 1;
  }
}

Object.setPrototypeOf(someObject, aDifferentPrototype);

/**
 *  [ someObject ] --proto-> [ aDifferentPrototype ]
 */

console.log(someObject.someNumber);
console.log(someObject.somePrototypeMethod());

console.log(someObject.toString());

/**
 *  [ someObject ] --proto-> [ aDifferentPrototype ]
 *  [ aDifferentPrototype ] --proto-> [ object prototype ] --proto--> null
 */

console.log(someObject.notAProperty);

someObject.someNumber = 1337;

console.log(someObject.someNumber);
console.log(aDifferentPrototype.someNumber);

const anotherObject = {
  someBoolean: true
}

Object.setPrototypeOf(anotherObject, aDifferentPrototype);

console.log(anotherObject.somePrototypeMethod());
console.log(someObject.somePrototypeMethod());

console.log(Object.getPrototypeOf(someObject) === Object.getPrototypeOf(anotherObject));

aDifferentPrototype.aMethodAddedAtRuntime = function () {
  return "Wowy Zowy!";
}

console.log(someObject.aMethodAddedAtRuntime());
console.log(anotherObject.aMethodAddedAtRuntime());


