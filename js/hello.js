/**
 * Created by kirst_000 on 1/7/2015.
 */

var hello = "hello";
var world = 'world';
var num = 1;
var num1 = 2;
var other = num + hello;
var array = [0,1,2,3,"bob"];
array.push("alice");
var object = { name: "bob", age: 25, spouse: null};
//object.spouse = "alice";

console.log({name: "jim", age: 22}.name);
console.log(undefined === null); //false
console.log(undefined == null); // true
console.log(object);
console.log(num + hello);
console.log(hello + " " + world);

function doSomething() {
    console.log("I did it!");
}
doSomething();

var doSomethingElse = function() {
    console.log("I did something else!");
}
doSomethingElse();

function withArgs(arg1, arg2) {
    console.log(arg1 + " " + arg2);
}

withArgs(hello, world);

var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

var person = new Person("bob", 25);
console.log(person);

var p = Person;

Person.prototype.getOlder = function() {
    this.age++;
}

person.getOlder();

console.log(person);
console.log(p);
console.log(Person);
