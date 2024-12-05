// Write a condition to check if a student is eligible for a scholarship. The criteria are:
// - The student’s grade is A or B.
// - The student’s attendance is above 75%.
// Use a ternary operator to assign "Eligible" or "Not Eligible" to a variable.
var attendance,A,B;
var grade='A';
attendance=75;
var res= ((grade==='A' || grade==='B') && attendance>=75)? "eligible" : "not eligible" ;
console.log(res);

// Classify a person based on their age:
// - If the age is less than 13, they are a “Child”.
// - If the age is between 13 and 19 (inclusive), they are a “Teenager”.
// - Otherwise, they are an “Adult”.
// Use nested ternary operators to determine the classification.
var age=12;
var res = (age < 13)?"child":(age >= 13 && age <=19)?"teenager":"adult";
console.log(res)

// Check the login status of a user. A user is considered logged in if:
// - isLoggedIn is true.
// - Their session is active (sessionActive is true).
// Use a ternary operator to log "Welcome Back" if the user is logged in and "Please Log In" otherwise
var isLoggedIn=true;
var sessionActive=true;
var res = (isLoggedIn && sessionActive)?"Welcome Back":"Please log in";
console.log(res);

// Assign a letter grade based on a student’s score:
// - Scores 90 and above: "A".
// - Scores between 80 and 89: "B".
// - Scores between 70 and 79: "C".
// - Scores below 70: "Fail".
// Use nested ternary operators to determine the grade.
var score=60;
var res = (score >= 90 && score <=100)?"grade:A":(score >= 80 && score <90)?"grade:B":(score >= 70 && score <80)?"grade:c":"fail";
console.log(res);

// Determine the discount for a product based on the following criteria:
// - If the product price is greater than $100, the discount is 20%.
// - Otherwise, the discount is 10%.
// Use a ternary operator to set the discount percentage.
var price=90;
var res = (price>100)?price=price-price * 0.2:price =price- price*0.1;
console.log(res);