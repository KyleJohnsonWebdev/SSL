const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var grader = "Kyle Johnson"
console.log("Hi, welcome to " + grader + "'s grader.")

rl.question('What is your Name? ', function (name) {
  // TODO: Log the answer in a database
  console.log("Thank you:", name);
  rl.question("What is the name of your assignment? ", function (assignment) {
    // TODO: Log the answer in a database
    rl.question("What was the grade that you received on the " + assignment + " assignment.", function (grade) {
      // TODO: Log the answer in a database
        rl.close();
    })
  })
})

var gradeFloat = parseFloat(grade);

var letterGrade = "";

switch (gradeFloat){
  case (gradefloat <= 110 && gradefloat >= 90):
  letterGrade = "A";
  break;
  case (gradefloat <= 89.99 && gradefloat >= 80):
  letterGrade = "B";
  break;
  case (gradefloat <= 79.99 && gradefloat >= 70):
  letterGrade = "C";
  break;
  case (gradefloat <= 69.99 && gradefloat >= 60):
  letterGrade = "D";
  break;
  case (gradefloat <= 59.99 && gradefloat >= 0):
  letterGrade = "F";
  break;
  default:
  alert("none");
  break;
}

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

var g1 = new Grader(name, assignment, grade, letterGrade);
g1.display();
