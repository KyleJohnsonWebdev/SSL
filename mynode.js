"use strict";
//The rl.question() method displays the query by writing it to the output, waits for user input to be provided on input, then invokes the callback function passing the provided input as the first argument.
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//Create methods to output a valid grade
function letter(num){
  var letterGrade = "";
    if ((num <= 110) && (num >= 90)){
      letterGrade = "A";
    }
    else if ((num <= 89.99) && (num >= 80)){
      letterGrade = "B";
    }
    else if ((num <= 79.99) && (num >= 70)){
      letterGrade = "C";
    }
    else if ((num <= 69.99) && (num >= 60)){
      letterGrade = "D";
    }
    else if((num <= 59.99) && (num >= 0)){
      letterGrade = "F";
    }
    return letterGrade;
  }

//Create a class "Grader"
class Grader {
  constructor(mName, mAssignment, mGrade, mLetterGrade){
    this.name = mName;
    this.assignment = mAssignment;
    this.grade = mGrade;
    this.letterGrade = mLetterGrade;
  }
  display(){
    console.log("The current student is " + this.name + ", you got a " + this.letterGrade + " on the " + this.assignment + " assignment.")
  }
}

//Create a grader
var grader = "Kyle Johnson"
console.log("Hi, welcome to " + grader + "'s grader.")
//Using the command line ask user a question for students name, assignment name, and grade
rl.question('What is your Name? ',(name)=>{
  console.log("Thank you:", name);
  rl.question("What is the name of your assignment? ",  (assignment)=>{
    rl.question("What was the grade that you received on the " + assignment + " assignment.", (grade) => {
      var gradeFloat = Number.parseFloat(grade);
      var letterGrade = letter(gradeFloat);
      var g1 = new Grader(name, assignment, grade, letterGrade);
      g1.display();
      rl.close();
    })
  })
})
