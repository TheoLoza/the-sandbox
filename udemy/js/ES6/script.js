// ** Variable declarations with let and const

/*
// ES5, function scoped
var name5 = 'Jane Smith';
var age5 = 23;
name5 = 'Jane Miller';
console.log(name5);

// ES6, blocked scoped
let name6 = 'Jane Smith'; // Can't change
let age6 = 23; // Like the old 'var', you can change this
name6 = 'Jane Miller';
console.log(name6);


// Function vs blocked scoped
// ES5
function driversLicense5(passedTest){
    if (passedTest){
        // These variables will only work inside the function
        var firstName = 'John';
        var yearOfBirth = 1990;
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', can drive legally');
}
driversLicense5(true);

// ES6
function driversLicense6(passedTest){
    // console.log(firstName); // Will throw an error
    let firstName;
    const yearOfBirth = 1990;
    if (passedTest){
        // These variables will only work inside this if statement, need to declare them outside the block
        // Declaring outside the block will only work for 'let'
        firstName = 'John';
    }
    console.log(firstName + ', born in ' + yearOfBirth + ', can drive legally');
}
driversLicense6(true);
let i = 23;
for (let i=0; i<5; i++){
    console.log(i);
}
console.log(i);
*/

// ** Blocks and IIFEs

/*
// ES6
{
    const a = 1;
    let b = 2;
    var c = 4;
}
// console.log(a + b); // Throws an error

// ES5
(function(){
    var c = 4;
})();
console.log(c);
*/

// ** Strings in ES6

/*
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;
function calcAge(year){
    return 2019 - year;
}

// Template literals
// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth));

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)}`);

// New methods
const n = `${firstName} ${lastName}`;
n.startsWith('J'); // Returns if the string starts with arg as boolean
n.endsWith('th'); // Same as startsWith, but the other way
n.includes(' '); // If the string contains a substring
firstName.repeat(5); // Repeats the string
*/

// ** Arrow functions: Basics

/*
const years = [1990, 1991, 1998, 1928];

// ES5
var ages5 = years.map(function(el){
    return 2019 - el;
});
console.log(ages5);

// ES6
// <arguement> => <statement(s)>
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

// None or more than one arguement
ages6 = years.map((el, index) => `Age element ${index+1}: ${2019-el}`);
console.log(ages6);

// More than one line on right side
ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `Age element ${index+1}: ${age}`;
});
console.log(ages6);
*/

// ** Arrow functions: Lexical 'this' keyword

/*
// Arrow functions do not have a 'this' keyword
// They use the 'this' keyword of the function they are in

// ES5
var box5 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'This is box number ' + self.position + ' and it is ' + self.color;
            alert(str);
        })
    }
};
//box5.clickMe();

// ES6
const box6 = {
    color: 'green',
    position: 1,
    clickMe: function(){
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
};
box6.clickMe();

const box66 = {
    color: 'green',
    position: 1,
    clickMe: () => {
        document.querySelector('.green').addEventListener('click', () => {
            let str = 'This is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        })
    }
};
box66.clickMe();


function Person(name){
    this.name = name;
};

// ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el;
    }.bind(this));

    console.log(arr);
}
var friends = ['Bob', 'Jane', 'Mark', 'Mike'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => 
        `${this.name} is friends with ${el}`);

    console.log(arr);
}
new Person('John').myFriends6(friends);
*/

// ** Destructuring

/*
// ES5
var john = ['John', 25];
//var name = john[0];
//var age = john[1];

// ES6
const [name, age] = ['John', 25];
console.log(name);
console.log(age);

const obj = {
    firstName: 'John',
    lastName: 'Smith'
};

const {firstName, lastName} = obj; // Has to match the obj fields
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj; // Changing the name of the variables
console.log(a);
console.log(b);

function calcAgeRetire(year){
    const age = new Date().getFullYear() - year;
    return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetire(1990);
console.log(age2);
console.log(retirement);
*/

// ** Arrays in ES6

/*
const boxes = document.querySelectorAll('.box'); // Returns a node list

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'dodgerblue';
});

// ES6
const boxesArr6 = Array.from(boxes); // Transforms into array
boxesArr6.forEach(cur => cur.style.backgroundColor = 'blue');

// Looping

// ES5
for (var i=0; i<boxesArr5.length; i++){
    if (boxesArr5[i].className === 'box blue'){
        continue;
    } else{
        boxesArr5[i].textContent = 'I changed to blue';
    }
}

// ES6
for (const cur of boxesArr6){
    if (cur.className.includes('blue')){
        continue;
    } else{
        cur.textContent = 'I changed to blue';
    }
}

// Finding elements in array

// ES5
var ages = [12, 18, 11, 3, 17, 4];
var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

// ES6
ages.findIndex(cur => cur >= 18);
console.log(ages.find(cur => cur >= 18));
*/

// ** The spread operator

/*
function addFourAges(a, b, c, d){
    return a + b + c + d;
}
var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

// Joining arrays
const famSmith = ['John', 'Jane', 'Mark'];
const famMiller = ['Mary', 'Bob', 'Anne'];
const bigFam = [...famSmith, 'Theo', ...famMiller];
console.log(bigFam);

// Node lists too
const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];

Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

// ** Rest parameters

/*
// ES5
function isFullAge5(){
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments);

    argsArr.forEach(function(current){
        console.log((2019 - current) >= 18);
    });
}
isFullAge5(1990, 1999, 1965);
isFullAge5(1990, 1999, 1965, 2018, 2019);


// ES6
function isFullAge6(...years){
    // console.log(years);
    years.forEach(current => console.log((2019 - current) >= 18));
}
isFullAge6(1990, 1999, 1965);

// Adding more specific parameters
// ES5
function isFullAge5(limit){
    // console.log(arguments);
    var argsArr = Array.prototype.slice.call(arguments, 1);

    argsArr.forEach(function(current){
        console.log((2019 - current) >= limit);
    });
}
isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2018, 2019);


// ES6
function isFullAge6(limit, ...years){
    // console.log(years);
    years.forEach(current => console.log((2019 - current) >= limit));
}
isFullAge6(16, 1990, 1999, 1965);
*/

// ** Default parameters

/*
// ES5
function SmithPerson5(firstName, yearOfBirth, lastName, nationality){
    
    lastName === undefined ? lastName = 'Smith' : lastName = lastName;
    nationality === undefined ? nationality = 'American' : nationality = nationality;
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson5('John', 1990);
var emily = new SmithPerson5('Emily', 1983, 'Diaz', 'Spanish');

// ES6
function SmithPerson6(firstName, yearOfBirth, lastName = 'Smith', nationality = 'American'){
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearOfBirth = yearOfBirth;
    this.nationality = nationality;
}
var john = new SmithPerson6('John', 1990);
var emily = new SmithPerson6('Emily', 1983, 'Diaz', 'Spanish');
*/

// ** Maps

/*
// Can use anything as keys
const question = new Map();
question.set('question', 'What is the official name of the latest major JavaScript version?');
question.set(1, 'ES5');
question.set(2, 'ES6');
question.set(3, 'ES2015');
question.set(4, 'ES7');
question.set('correct', 3);
question.set(true, 'Correct answer');
question.set(false, 'Wrong');

console.log(question.get('question'));
console.log(question.size);

if(question.has(4)){
    // question.delete(4);
    console.log('There is a fourth choice');
}
// question.clear();

// Maps are iterable, easy to get size, easy to add and delete data
question.forEach((value, key) => console.log(`This is ${key}, and it's set to '${value}'`));

for (let [key, value] of question.entries()){
    if (typeof(key) === 'number'){
        console.log(`Answer ${key}: ${value}`);
    }
}

const ans = parseInt(prompt('Write an answer:'));
console.log(question.get(ans === question.get('correct')));
*/

// ** Classes

/*
// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var john5 = new Person5('John', 1990, 'teacher');

// ES6
class Person6{
    // Every class declaration has to have this constructor()
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // Adding method
    calculateAge(){
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }

    // Static methods
    static greeting(){
        console.log('Hello');
    }
}
const john6 = new Person6('John', 1990, 'teacher');
Person6.greeting();

Class defns are not hoisted
We can only add methods to classes, but not properties
*/

// ** Classes with subclasses

/*
// ES5
var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}
Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}
var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    // Call superclass
    Person5.call(this, name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

// Create the prototype chain after adding methods
Athlete5.prototype = Object.create(Person5.prototype);
Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var johnAthlete5 = new Athlete5('John', 1990, 'swimmer', 3, 10);
johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
// The superclass
class Person6{
    // Every class declaration has to have this constructor()
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    // Adding method
    calculateAge(){
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

// The subclass
class Athlete6 extends Person6{
    constructor(name, yearOfBirth, job, olympicGames, medals){
        // Same as the call() function
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal(){
        this.medals++
        console.log(this.medals);
    }
}
const johnAthlete6 = new Athlete6('John', 1990, 'swimmer', 3, 10);
johnAthlete6.wonMedal();
johnAthlete6.calculateAge();
*/

// ** Coding challenge 8

class TownElement{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElement{
    constructor(name, buildYear, area, trees){
        super(name, buildYear);
        this.area = area;
        this.trees = trees;
    }

    treeDensity(){
        const density = this.trees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per sq km`);
    }
}

class Street extends TownElement{
    constructor(name, buildYear, length, size = 3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }

    classifyStreet(){
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');

        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
new Park('National Park', 1894, 2.9, 3541),
new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
new Street('Evergreen Street', 2008, 2.7, 2),
new Street('4th Street', 2015, 0.8),
new Street('Sunset Blvd', 1982, 2.5, 5)];

function calc(array){
    // ES5 reduce() function
    const sum = array.reduce((previous, current, index) => previous + current, 0);
    return [sum, sum / array.length];
}

function reportPark(park){
    console.log('---PARKS REPORT---');

    // Density
    park.forEach(element => element.treeDensity());

    // Avg age
    const ages = park.map(element => new Date().getFullYear() - element.buildYear);
    const [totalAge, avgAge] = calc(ages);
    console.log(`Our ${park.length} have an average of ${avgAge} years`);

    // More than 1000 trees
    const index = park.map(element => element.trees).findIndex(element => element >= 1000);
    console.log(`${park[index].name} has more than 1000 trees`);
}

function reportStreet(street){
    console.log('---STREET REPORT---');

    // Total and average length
    const lengths = street.map(element => element.length);
    const [totalLen, avgLen] = calc(lengths);
    console.log(`Our ${street.length} have a total of ${totalLen} km and an average of ${avgLen} km`);

    // Size classification
    street.forEach(element => element.classifyStreet());

}

reportPark(allParks);
reportStreet(allStreets);