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