/*
// **Creating Objects: Function Constructors**

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function(){
    this.age = 2019 - this.yearOfBirth;
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

console.log(john.age);
console.log(jane.age);
console.log(mark.age);
*/

/* **********************************************************
// **Object.create Method**

var personProto = {
    calculateAge: function(){
        console.log(2019 - this.yearOfBirth);
    }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: {value:1969},
    job: {value:'designer'}
});
*/

/* **********************************************************
// **Primatives vs Objects**

// Primatives
var a = 23;
var b = a;
a = 46;
console.log(a, b);

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age, obj2.age);

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);

console.log(age, obj.city);
*/

/* **********************************************************
// **First Class Functions**

// Passing functions as arguements
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element){
    return 2019 - element;
}

function isFullAge(element){
    return element >= 18;
}

function maxHeartRate(element){
    if (element >= 18 && element <= 81){
        return Math.round(206.9 - (0.67 * element));
    } else{
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);
console.log(ages);
console.log(fullAges);
console.log(rates);

// Functions returning functions

function interviewQuestion(job){
    if (job === 'designer'){
        return function(name){
            console.log(name + ', can you explain what UX design is?');
        };
    } else if (job === 'teacher'){
        return function(name){
            console.log('What subject do you teach, ' + name + '?');
        };
    } else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        };
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('John');
designerQuestion('Jane');
designerQuestion('John');
designerQuestion('Mark');
designerQuestion('Mike');

interviewQuestion('teacher')('Mark');
*/

/* ************************************************************
// **IIFE: Immediately Invoked Function Expressions**

// function game(){
//     var score = Math.random() * 10;
//     console.log(score >= 5);
// }

// game();

(function(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})(); // PARENTHESES INVOKES THE FUNCTION, WITHOUT IT, IT WILL NOT RUN IMMEDIATELY
// console.log(score); // undefined

(function(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); // goodLuck variable in the end
*/

/* **********************************************************
// **Closures**

function retirement(retirementAge){
    var a = ' years left until retirement';
    return function(yearOfBirth){
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    };
}

var retirementUS = retirement(66);
retirementUS(1990); // retirement(66)(1990)


var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementGermany(1990);
retirementIceland(1990);

function interviewQuestion(job){
    return function(name){
        if (job === 'designer'){
            console.log(name + ', can you explain what UX design is?');
        } else if (job === 'teacher'){
            console.log('What subject do you teach, ' + name + '?');
        } else{
            console.log('Hello ' + name + ', what do you do?');
        }
    };
}

interviewQuestion('teacher')('John');
*/

/* **********************************************************
// **Bind, call, and apply**

// Method borrowing using call()
var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + ' Ladies and gentlemen! I\'m ' +
             this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old');
        } else if (style === 'friendly'){
            console.log('Hey, what\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' +
             timeOfDay);
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// Method borrowing using apply()
// It accepts an array, unlike the call function. 
// john.presentation.apply(emily, ['friendly', 'afternoon']);

// Method currying using bind()
var johnFriendly = john.presentation.bind(john, 'friendly');

johnFriendly('morning');
johnFriendly('night');

var emilyFormal =  john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');

var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn){
    var arrResult = [];
    for (var i = 0; i < arr.length; i++){
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function calculateAge(element){
    return 2019 - element;
}

function isFullAge(limit, element){
    return element >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);
*/

/* ************************************************
// **Coding challenge 7**

var Question = function(question, choices, correctAns){
    this.question = question;
    this.choices = choices;
    this.correct = correctAns;
    // this.askQuestion = function(){
    //     console.log(question + '\n');
    //     for (var i = 0; i<this.choices.length; i++){
    //         console.log(i + ': ' + this.choices[i]);
    //     }
    // };
    // this.checkAnswer = function(answer){
    //     for (var i = 0; i<this.choices.length; i++){
    //         if (this.correct === this.choices[i]){
    //             this.correct = i;
    //         }
    //     }
    //     if (answer == this.correct){
    //         return true; 
    //     }
    //     return false;
    // };
};


    //Better practice: use prototype property

    Question.prototype.askQuestion = function(){
        console.log(this.question + '\n');
        for (var i = 0; i<this.choices.length; i++){
            console.log(i + ': ' + this.choices[i]);
        }
    };

    Question.prototype.checkAnswer = function(answer){
        for (var i = 0; i<this.choices.length; i++){
            if (this.correct === this.choices[i]){
                this.correct = i;
            }
        }
        if (answer == this.correct){
            return true; 
        }
        return false;
    };


var questionArr = [];

questionArr[0] = new Question('Is JavaScript a fun language?', 
['yes', 'no'], 'yes');

questionArr[1] = new Question('What is the instructor\'s name?', 
['James', 'John', 'Jonas'], 'Jonas');

questionArr[2] = new Question('Are you alive?', 
['yes', 'no'], 'yes');

questionArr[3] = new Question('What best describes coding?', 
['Boring', 'Hard', 'Fun', 'Tedious'], 'Fun');

(function(questions){
    var userAnswer = '';
    var score = 0;
    var numOfQuestions = 4;
    do{
    var questionNum = Math.floor(Math.random() * numOfQuestions);
    questions[questionNum].askQuestion();
    userAnswer = prompt('Answer the question by entering the corresponding number below');
    var answerCorrect = questions[questionNum].checkAnswer(userAnswer);

    if (answerCorrect){
        score++;
        console.log('Correct!\n' + 'Your score is: ' + score);
        console.log('===================');
    } else{
        console.log('Incorrect\n' + 'Your score is: ' + score);
        console.log('===================');
    }
    } while(userAnswer !== 'exit');
    console.log('Your final score is ' + score);
})(questionArr);
*/