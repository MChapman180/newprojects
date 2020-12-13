// create an exercise to do list app
//display the workout days in the console
// ask the user how many 60 workouts they want to do overall in the week
//create an object for the workout plan
//each muscle group in a strength train out should have 2 days rest after it
//cardio exercises should have 1 day rest after them
//randomly assign the exercises to the days selected, accounting for gaps

let readline = require('readline-sync');
const MESSAGES = require('./MESSAGE.json');
let exercises = ['cycling', 'swimming', 'running', 'badminton', 
'back', 'biceps', 'triceps', 'chest', 'abs', 'legs'];
const DAYS = ['monday', 'tuesday', 'wednesday', 'thursday', 
'friday', 'saturday', 'sunday'];  
let calendar = {};  
let workouts = 0;
let chosenDays;

function prompt(message) {
  console.log(`=>${message}`);
}

function createCalendar(days) {
  let random = Math.floor(Math.random() * exercises.length - 1)
    days.forEach(day => calendar[day] = [])
      for (let prop in calendar) {
        while (workouts > 0) {
          calendar[prop].push(exercises.splice(random, 1));
          workouts -= 1;
      } 
  }
    }

function validInput(input) {
  let correct = ['y', 'yes', 'no', 'n'];
  return correct.includes(input.toLowerCase()) &&
  input.length === correct[correct.indexOf(input)].length;
}

function continueProgram(input) {
  return input.toLowerCase() === 'y' || input.toLowerCase() === 'yes';
}

function chooseDays(answer) {
   let arr = answer.toLowerCase().split(', ');
   return arr.filter(day => DAYS.includes(day))
}

function displayDays(arr) {
  console.log(`Your selected workout days are: `)
  arr.forEach((day, idx) => console.log(`${idx + 1}: ${day}`));
}

function validateNumWorkouts(num) {
  return Number(num);
}

let answer;
while (!answer) {
  prompt('Which days would you like to work out? (add all separated by a comma and space');
  answer = readline.question();
}
chosenDays = chooseDays(answer);
displayDays(chosenDays);
prompt('How many workouts would you like to do per day?');
answer = readline.question();
let num = validateNumWorkouts(answer)








