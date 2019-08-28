/*
// ** Execution Contexts and the Execution Stack **

var name = 'John'; // Global exec context

function first(){ 
    var a = 'hello';
    second(); // Second exec context
    var x = a + name;
    console.log(x); // Exit third
}

function second(){
    var b = 'hi';
    third(); // Third exec context
    var z = b + name;
    console.log(z); // Exit second
}

function third(){
    var c = 'hey';
    var z = c + name;
    console.log(z); // Exit first
}

first(); // First exec context
// Exit fourth
*/

/*
// ** Hoisting **

// functions
calculateAge(1965);

function calculateAge(year){
    console.log(2019 - year);
}

// retirement(1965); // ERROR: since this is a function expression not a declaration
var retirement = function(year){
    console.log(65 - (2019 - year));
};

// variables
console.log(age); // undefined. Engine scans for variable declarations and sets to undefined
var age = 23;

function foo(){
    console.log(age); // also undefined
    var age = 65;
    console.log(age);
}
foo(); // age in different exec context object
console.log(age); // age in global exec context object
*/

/*
// ** Scoping **

// First scoping example

var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}


// Example to show the differece between execution stack and scope chain

var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third();
    }
}
function third() {
    var d = 'John';
    // console.log(a + b + c + d); // ERROR: b and c are out of scope
    console.log(a+d);
}
*/

// ** The 'this' keyword **

// console.log(this);

function calculateAge(year){
    console.log(2019 - year);
    console.log(this);
}

var John = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function(){
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        function innerFunction(){
            console.log(this);
        }
        innerFunction();
    }
};

John.calculateAge();

var Mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

Mike.calculateAge = John.calculateAge;
Mike.calculateAge();