// Edited by Theo Loza

var inputName = prompt("Enter your full name");
var inputAge = prompt("Enter your age");
var inputHeight = prompt("Enter your height in centimeters");
var inputPet = prompt("Enter your pet's name");

fullName = inputName.split(' ');
firstName = fullName[0];
lastName = fullName[fullName.length - 1];

if (firstName[0] == lastName[0] && (inputAge < 30 && inputAge > 20) && inputHeight > 170 && inputPet[inputPet.length - 1] == "y"){
  console.log("Welcome spy!");
}
else{
  console.log("Nothing to see here");
}

alert("Thanks!");