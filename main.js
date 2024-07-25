// Generate a random race number
let raceNumber = Math.floor(Math.random() * 1000);

// Variable for early registration
let registeredEarly = false;

// Runner's age
let runnerAge = 25;

if (registeredEarly && runnerAge >= 18) {
  console.log(`Adult Runner with race number ${raceNumber + 1000} will race at 9:30 AM.`);
} else if (!registeredEarly && runnerAge >= 18) {
  console.log(`Adult Runner with race number ${raceNumber + 1000} will race at 11:00 AM.`);
} else {
  console.log(`Youth Runner with race number ${raceNumber + 1000} will race at 12:30 PM.`);
};
