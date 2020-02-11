import sys
import math
#validate if the grade input is an int
def userNumber(message):
    while True:
        try:
            gradeInput = float(raw_input(message))
            return gradeInput
        except ValueError:
            print("Not an number! Try again.")

def userGradeLetter(g):
    if g <= 110 and g >= 90:
        return "A";
    elif g <= 89.99 and g >= 80:
        return "B";
    elif g <= 79.99 and g >= 70:
        return "C";
    elif g <= 69.99 and g >= 60:
        return "D";
    elif g <= 59.99 and g >= 0:
        return "F";
    else:print("not a valid grade")

#Create a class "Grader"
class Grader:
    def student_instance(self):
        print("The current student is " + self.name + ", you got a " + self.grade + " on the " + self.assignment + " assignment.")


#Create a grader
grader = "Kyle Johnson"
print("Hi, welcome to " + grader + "'s grader.")

name = raw_input("What is your name?")
assignmentName = raw_input("What is the name of your assignment?")
grade = userNumber("What is was your grade for the assignment?")
letterGrade = userGradeLetter(grade)

#Declare a grader from the raw input
g1 = Grader()
g1.name = name
g1.grade = letterGrade
g1.assignment = assignmentName

#Return the letter grade for the assignment
g1.student_instance()
