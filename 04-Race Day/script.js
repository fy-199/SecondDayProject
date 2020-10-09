let raceNumber = Math.floor(Math.random() * 1000);
console.log(raceNumber)
let registeredEaryl = true ;
let runnersAge = prompt('How old are you?') ;
if (runnersAge > 18 && registeredEaryl) { raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}`);
  alert(`You will race at 9:30 am and your race number is ${raceNumber}`);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}`);
  alert(`You will race at 11:00 am and your race number is ${raceNumber}`);
} else if (runnersAge < 18) {
  console.log(`You will rune at 12:30 pm and your race number is ${raceNumber}`);
  alert(`You will rune at 12:30 pm and your race number is ${raceNumber}`);
} else if (runnersAge === 18) {
  console.log ('Please see registration desk');
  alert(`Please see registration desk`);
}
