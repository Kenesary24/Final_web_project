// This js for technical requirements

// Template Literal Syntax
const name = "Kenesary";
let age = 17;
const quote = `This site is made by ${name} and he is ${age} years old.`;
console.log(quote);

// Array Operations
let games = ['Rdr1', 'Rdr2', 'Gta'];
games.forEach(game => console.log(game));

let arr = [1, 2, 3, 4, 5];
const doubled = arr.map(num => num * 2);
console.log(doubled);

// Objects and Array Operations
const person = {
  name: 'Kenesary',
  age: 17
};
const student = {
  group: 2305,
  subject: 'Web'
};

console.log(person.name);

let Array = [...arr, ...[6, 7, 8]];
let Object = { ...person, ...student };

arr.forEach(num => console.log(num));
let result1 = arr.map(num => num * num);
let result2 = arr.filter(num => num % 2 === 0);
let result3 = arr.reduce((acc, num) => acc + num, 0);

console.log(Array);
console.log(Object);
console.log(result1);
console.log(result2);
console.log(result3);

// Constructor Function and ES6 Class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  console.log(`My name is ${this.name}.`);
};

const person1 = new Person('Kenesary', 17);
person1.say();

class Game {
  constructor(name) {
    this.name = name;
  }

  best() {
    console.log('Best games');
  }
}

class Rdr extends Game {
  best() {
    console.log('Best video game ever');
  }
}

const rdr2 = new Rdr('Arthur');
rdr2.best();
