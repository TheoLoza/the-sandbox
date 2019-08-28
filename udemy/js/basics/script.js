/*
// **variables and data types**

var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28; 
var fullAge = true; 

var job;
console.log(job);
job = 'Teacher';
console.log(job);
*/

/* ***********************************************************
// **variable mutation and type coercion**

// Type coercion
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried; 
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + 
job + '. Is he married? ' + isMarried);

// Variable mutation
age = 'twenty eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + 
job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/* ***********************************************************
// **Basic operators**

var year, yearJohn, yearMark;
year = 2019;
yearJohn = year - 28;
yearMark = year - 33;

console.log(yearJohn);

// Math operators
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical operators
var johnOlder = yearJohn > yearMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof yearJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/* ***********************************************************
// **Operator precedence**
var now = 2019;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;

// Multiple assignments
var x, y; 
x = y = (3 + 5) * 4 - 6; 
console.log(x, y);

// More operators
x *= 2; // x = x * 2
console.log(x);
x += 10;
console.log(x);
*/

/* ***********************************************************
// **Coding challenge 1**

// Mark and John are trying to compare their
// BMI. Formula is BMI = mass / height^2
// height in meters and mass in kg

var massMark = prompt("Enter Mark's mass in kg:");
var massJohn = prompt("Enter John's mass in kg:");
var heightMark = prompt("Enter Mark's height in meters:");
var heightJohn = prompt("Enter John's height in meters:");

var bmiMark = massMark / (heightMark * heightMark);
var bmiJohn = massJohn / (heightJohn * heightJohn);

if (bmiJohn > bmiMark){
    console.log('John has a bigger BMI');
} else if(bmiJohn < bmiMark){
    console.log('Mark has a bigger BMI')
} else{
    console.log('Both BMIs are the same');
}
*/

/* ***********************************************************
// **If/else statements**

var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + ' is married' );
} else{
    console.log(firstName + ' is not married');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married' );
} else{
    console.log(firstName + ' is not married');
}
*/

/* ************************************************************
// **Boolean logic**
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName + ' is a boy');
} else if(age >= 13 && age < 20){
    console.log(firstName + ' is a teen');
} else if (age >= 20 && age < 30){
    console.log(firstName + ' is a young man');
} else{
    console.log(firstName + ' is a man');
}
*/

/* ************************************************************
// **Ternary operator and switch statements**

var firstName = 'John';
var age = 21;

// Ternary operator
age >= 21 ? console.log(firstName + ' drinks beer'):
console.log(firstName + ' drinks juice');

 var drink = age >= 21 ? 'beer': 'juice';
 console.log(drink);

//  if (age >= 21){
//      drink = 'beer';
//  } else{
//      drink = 'juice';
//  }

// Switch statement
var job = 'teacher';
switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches');
        break;
    case 'driver':
        console.log(firstName + ' drives');
        break;
    case 'designer':
        console.log(firstName + ' designs');
        break;
    default:
        console.log(firstName + ' does nothing');
}

age = 20;
switch(true){
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teen');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}
*/

/* *************************************************************
// **Truthly and falsly values and equality operators**

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy

var height;

height = 23;
if (height || height === 0){
    console.log('The variable is defined');
} else{
    console.log('The variable is not defined');
}

// Equality operators
if (height === '23'){
    console.log('The == operator does type coercion');
}
*/

/* ************************************************************
// **Coding challenge 2**
var johnScores = [89, 120, 103];
var mikeScores = [116, 94, 123];
var maryScores = [97, 134, 105];

var johnAvg = (johnScores[0] + johnScores[1] + johnScores[2]) / 3;
var mikeAvg = (mikeScores[0] + mikeScores[1] + mikeScores[2]) / 3;
var maryAvg = (maryScores[0] + maryScores[1] + maryScores[2]) / 3;
console.log(johnAvg, mikeAvg, maryAvg);

if(johnAvg > mikeAvg && johnAvg > maryAvg){
    console.log('John wins');
} else if(mikeAvg > johnAvg && mikeAvg > maryAvg){
    console.log('Mike wins');
} else if(maryAvg > johnAvg && maryAvg > mikeAvg){
    console.log('Mary wins');
} else{
    console.log('There is a draw');
}
*/

/* ************************************************************
// **Functions**

function calculateAge(birthYear){
    return 2019 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsTilRetire(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(retirement + ' years left for ' + firstName);
    } else{
        console.log(firstName + ' retired');
    }
}

yearsTilRetire(1990, 'John');
yearsTilRetire(1948, 'Mike');
yearsTilRetire(1969, 'Jane');
*/

/* ************************************************************
// **Function statements and expressions**

// Function declaration
// function whatDoYouDo(job, firstName){}

// Function expression
var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches';
        case 'driver':
            return firstName + ' drives';
        case 'designer':
            return firstName + ' designs';
        default:
            return firstName + ' does somthing else';
    }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));
*/

/* ************************************************************
// **Arrays**

// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

// Mutate array data
names[1] = 'Mary';
console.log(names);
names[names.length] = 'Ben';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mister');
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesigner);
*/

/* ************************************************************
// **Coding challenge 3**

var bills = [124, 48, 268];
var tips = [];
var finalAmts = [];

function calculateTip(receipts, len){
    for(i=0; i < len; i++){
        if(receipts[i] < 50){
            tips[i] = receipts[i] * 0.2;
        } else if(receipts[i] >= 50 && receipts[i] < 200){
            tips[i] = receipts[i] * 0.15;
        } else{
            tips[i] = receipts[i] * 0.1;
        }
    }
}

calculateTip(bills, bills.length);
for(i=0; i < bills.length; i++){
    finalAmts[i] = bills[i] + tips[i];
}
console.log('Tip amounts: ' + tips);
console.log('Final amounts: ' + finalAmts);
*/

/* ************************************************************
// **Objects and properties**

// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// New object syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);
*/

/* ************************************************************
// **Objects and Methods**

var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age =  2019 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/* ************************************************************
// **Coding challenge 4**
var john = {
    fullName: 'John Smith',
    mass: prompt("John's mass in kg:"),
    height: prompt("John's height in m:"),
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var mark = {
    fullName: 'Mark Smith',
    mass: prompt("Mark's mass in kg:"),
    height: prompt("Mark's height in m:"),
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

john.calcBMI();
mark.calcBMI();

function result(){
    if (john.calcBMI() > mark.calcBMI()){
        console.log(john.fullName + ' has the higher BMI');
    } else if (john.calcBMI() < mark.calcBMI()){
        console.log(mark.fullName + ' has the higher BMI');
    } else{
        console.log('They both have the same BMI');
    }
}

result();
*/

/* ************************************************************
// Loops and Iteration

// for loop
for (var i=0; i<=20; i += 2){
    console.log(i);
}

// i=0, 0<10 true, log i to console i++
// i=1, 1<10 true, log i to console i++
// ...
// i=9, 9<10 true, log i to console i++
// i=10, 10<10 false, exit the loop

var john = ['John', 'Smith', 1990, 'designer',
false, 'blue'];
for (var i = 0; i < john.length; i++){
    console.log(john[i]);
}

// while loop
var i = 0;
while (i<john.length){
    console.log(john[i]);
    i++;
}

// continue and break statements
var john = ['John', 'Smith', 1990, 'designer',
false, 'blue'];
for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++){
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}

// looping backwards
for (var i=john.length-1; i>=0; i--){
    console.log(john[i]);
}
*/

/* ************************************************************
// **Coding challenge 5**
var tipCalculator = {
    bill: [],
    tips: [],
    avg: 0,
    populateBill: function(values){
        for (var i=0; i<values.length; i++){
            this.bill.push(values[i]);
        }
    },
    calculateJohn: function(){
        for (var i=0; i<this.bill.length; i++){
            if (this.bill[i]<50){
                this.tips[i] = this.bill[i] * 0.2;
            } else if(this.bill[i]>=50 && this.bill[i]<200){
                this.tips[i] = this.bill[i] * 0.15;
            } else {
                this.tips[i] = this.bill[i] * 0.1;
            }
        }
    },
    calculateMark: function(){
        for (var i=0; i<this.bill.length; i++){
            if (this.bill[i]<100){
                this.tips[i] = this.bill[i] * 0.2;
            } else if(this.bill[i]>=100 && this.bill[i]<300){
                this.tips[i] = this.bill[i] * 0.10;
            } else {
                this.tips[i] = this.bill[i] * 0.25;
            }
        }
    },
    calculateAvg: function(){
        var sum = 0;
        for (var i=0; i<this.bill.length; i++){
            sum += this.bill[i];
        }
        this.avg = sum / this.bill.length;
        return this.avg;
    },
    calculateTotal: function(){
        for (var i=0; i<this.bill.length; i++){
            this.bill[i] += this.tips[i];
        }
    },
    clearBill: function(){
        for (var i=this.bill.length - 1; i>=0; i--){
            this.bill.pop();
        }
    },
    clearAvg: function(){
        this.avg = 0;
    },
    clearTips: function(){
        for (var i=this.tips.length - 1; i>=0; i--){
            this.tips.pop();
        }
    }
};

var johnBill = [124, 48, 268, 180, 42];
var markBill = [77, 375, 110, 45];

tipCalculator.populateBill(johnBill);
tipCalculator.calculateJohn();
tipCalculator.calculateTotal();
var johnAvg = tipCalculator.calculateAvg();

tipCalculator.clearAvg();
tipCalculator.clearBill();
tipCalculator.clearTips();

tipCalculator.populateBill(markBill);
tipCalculator.calculateMark();
tipCalculator.calculateTotal();
var markAvg = tipCalculator.calculateAvg();

console.log(johnAvg);
console.log(markAvg);

if (johnAvg > markAvg){
    console.log("John's family paid more on average");
} else if(johnAvg < markAvg){
    console.log("Mark's family paid more on average");
} else{
    console.log('Tie on bills');
}
*/
