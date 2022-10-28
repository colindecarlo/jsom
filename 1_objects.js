/**
 * Object literals
 *  - objects have properties
 *      - properties can be anything
 *        - strings
 *        - methods that don't reference this
 *          - anonymous
 *          - named
 *        - methods that do reference this
 *        - other objects
 */

const someObject = {};
someObject.someString = 'foo';
someObject.someMethod = () => 'bar';
someObject.sayHello = function hello () {
  return 'hello';
}
someObject.anotherMethod = function () {
  return this.someString;
}

someObject.anotherObject = {
  name: 'Colin'
}

console.log(Object.getOwnPropertyDescriptors(someObject));
console.log(someObject.anotherMethod());


