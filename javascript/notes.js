//sends alert
alert('Hello World');


//console functions
console.log('Hello world');
console.error('This is an error');
console.warn('This is a warning');


//var, let, const
//var is not used because it is global
var num = 30;
//const can't be change
const parents = 2;
// String, Numbers, Boolean, null, undefined
const name = 'Erica';
const age = '27';
const rating = 10;
const isCute = true;
const x = null;
const y = undefined;
let z;


//returns type value ie. number
typeof(age);


// Concatenation, old way
console.log('My girlfriend\'s name is ' + name + ' and she is' + age);
// Template String
console.log(`My girlfriend's name is ${name} and she is ${age}`)


// Methods
const s = 'Hello Erica!!';
//length
console.log(s.length);
//upper case
console.log(s.toUpperCase());
//lower case
console.log(s.toLowerCase());
//string + multi function
console.log(s.substring(0,5).toUpperCase());
//split into array
console.log(s.split(' '));


//Arrays
//defined two ways
const numbers = new Array(1,2,3,4,5);
//more common
const fruit = ['apples', 'oranges', 'mandarins']
//insert at the 3rd index
fruit[3] = 'grapes';
//inserts at the end
fruit.push('pears');
//inserts at the start
fruit.unshift('lychee');
//removes element at the end
console.log(fruit.pop());
//remove element from the start
console.log(fruit.shift());
//checks for array
console.log(Array.isArray(fruit));
//check which index for specific value
console.log(fruit.indexOf('apples'));
//print entire list
console.log(fruit);
//length of array
console.log(fruit.length());


// Objects
const person = {
    firstName: 'Erica',
    lastName: 'Xg',
    age: 27,
    hobbies: ['TFT', 'Valorant', 'Kev'],
    address: {
        city: 'Sydney',
        suburb: 'Carlton'
    }
}

//pulls values out of obj and assigns them
const { firstName, lastName, address: { city }} = person;
console.log(firstName); // Erica
//add value
person.email = 'erica.xg@hotmail.com'
console.log(person);

//JSON conversion
const personJSON = JSON.stringify(person);
console.log(personJSON);

// For
for(let i = 0; i < 10; i++) {
    console.log(i);
}

const todos = [
    {
        id: 0,
        text: 'Buy groceries',
        isComplete: false
    },
    {
        id: 2,
        text: 'See my doctor',
        isComplete: false
    },
    {
        id: 3,
        text: 'Do Erica',
        isComplete: true
    }
]

// runs function on each variable 'todo'
todos.forEach(function(todo) {
    console.log(todo.text);
});

// map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);


// if statements, === is true comparison
const x = 9
if (x === 10) {
    console.log('x is 10');
} else {
    console.log('x is NOT 10');
}

// ? Operator or Ternary
const color = x > 10 ? 'red' : 'blue';

console.log(color);

// Switch
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is not red or blue');
        break;
}


// Functions
function addNums(num1, num2) {
    console.log(num1 + num2);
}

addNums(5,3);

// Fat arrow for single line function, also default values for function
const addNums2 = (num1 = 1, num2 = 2) => num1 + num2;

console.log(addNums2());


// Objects
function Person(firstname, lastname, dob) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstname} ${this.lastname}`;
}

const erica = new Person('Erica', 'Xiang', '10-29-1995');

console.log(erica);
console.log(erica.getFullName());


// Classes over Objects
class Person {
    constructor(firstname, lastname, dob) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.dob = new Date(dob);    
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const erica = new Person('Erica', 'Xiang', '10-29-1995');

console.log(erica);
console.log(erica.getFullName());
console.log(erica.getBirthYear());