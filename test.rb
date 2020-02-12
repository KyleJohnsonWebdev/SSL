#Function to validate
def grade?(object)
  #changes the object into a string object, then the object can be tested against regex, to_s = Convert it into an string, and to_a = Returns true if class is the class of obj, or if class is one of the superclasses of obj or modules included in obj.
  object = object.to_s unless object.is_a? String
  # If we don't escape, the letter will match
  /\A[+-]?\d+(\.[\d]+)?\z/.match object
end

#Create a class "Grader"
class Grader
  def initialize(mName, mAssignment, mGrade, mLetterGrade)
    #instance variables
    @name = mName
    @assignment = mAssignment
    @grade = mGrade
    @letterGrade = mLetterGrade
  end
  #function to display all the info for the student
  def display
    puts "The current student is #{@name}, you got a #{@letterGrade} on the #{@assignment} assignment."
  end
end

#Create a grader
grader = "Kyle Johnson";

puts "Hi, welcome to " + grader + "'s grader.";
puts "What is your name?";
name = gets.chomp;
puts "What is the name of your assignment?";
assignmentName = gets.chomp;
puts "What was the grade on the " + assignmentName + " assignment."

grade = nil
#validate the user entered a number
loop do
  grade = gets.chomp
  break if grade?(grade)
  puts "Please enter a number."
end

#case/switch statement to assign a letter grade
g = grade.to_f
letter = nil
case g
when 0..59.99
  letter = "F"
when 60..69.99
  letter = "D"
when 70..79.99
  letter = "C"
when 80..89.99
  letter = "B"
when 90..110
  letter = "A"
else
  letter = "Error: Number has an invalid value (#{g})"
end

#instantiate new grader
g1 = Grader.new(name, assignmentName, grade, letter);
g1.display










#Declare a grader from the raw input


#Return the letter grade for the assignment
