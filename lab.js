//checking that this updated

////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/
//CODE HERE
let lovesCode = true
if (lovesCode = true) {
  console.log('I love to code!')
  } else {
    console.log('Coding has its challenges.')
  }

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

//CODE HERE
if (amysAge>brittanisAge) {
  console.log(`Amy is older`)
} else if (amysAge === brittanisAge) {
  console.log('Amy and Brittani are the same age')
} else {
    console.log('Brittani is older')
}
////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/
if (amysBirthYear === brittanisBirthYear) {
  console.log('Amy & Brittani were INDEED born in the same year')
} else {
  console.log('Amy & Brittani were NOT born in the same year')
}
//CODE HERE

////////// PROBLEM 4 //////////


/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, one should wear a t-shirt and take an umbrella. If it is between 60 and 80 degrees, and raining, one should wear a rain-jacket. If it is 60 degrees or below, one should wear a jacket and carry an umbrella. Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

//CODE HERE
let temperature = 62;
let rain = true;
let x = 0
//console.log(1<x)


if (temperature>=80 && rain) {
  console.log('tshirt, shorts, umbrella')
}
if (60<=temperature && temperature<80 && rain) {
  console.log('sweatshirt, slacks, umbrella')
}
if (temperature<60 && rain) {
  console.log('jacket, slacks, umbrella')
}
if (temperature>=80 && !rain) {
  console.log('tshirt, shorts, sombrero')
}
if (60<=temperature && temperature<80 && !rain) {
  console.log('sweatshirt, shorts, bandana')
}
if (temperature<60 && !rain) {
  console.log('sweatshirt, slacks')
}
////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

//CODE HERE
for (let j=0; j<10; j++) {
  console.log('hello')
}
////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/
let count = 1
for (let h=0; h<10; h++) {
  console.log(count)
  count++
}
//CODE HERE

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

//CODE HERE
let count2 = 10
for (let h=0; h<10; h++) {
  console.log(count2)
  count2--
}

////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "Your score is not high enough" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

//CODE HERE
while (score<passingScore) {
  console.log('Your score is not high enough')
  score+=1
}
console.log('Your score is FINALLY high enough')
////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

//CODE HERE
let changeMyMind = true

if (changeMyMind) {
  changeMyMind = !changeMyMind
  console.log(changeMyMind)
} else {
  changeMyMind = !changeMyMind
  console.log(changeMyMind)
}
////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).

//CODE HERE
changeMyMind = !changeMyMind
console.log(changeMyMind)
////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 6;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

//CODE HERE
while (z>0) {
  for (let i=z; i>0; i--) {
    console.log(i)
  }
  z--
}