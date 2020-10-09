let note = prompt('Enter your note')
if (note >= 80 && note <= 100) {
  console.log('Your score: A');
  alert(`Your note ${note} and your score A`);
}
if (note >= 70 && note <= 89) {
  console.log('Your score: B');
  alert(`Your note ${note} and your score B`);
}
if (note >= 60 && note <= 69) {
  console.log('Your score: C');
  alert(`Your note ${note} and your score C`);
}
if (note >= 50 && note <= 59) {
  console.log('Your score: D');
  alert(`Your note ${note} and your score D`);
}

if (note >= 0 && note <= 49) {
  console.log('Your score: F');
  alert(`Your note ${note} and your score F`);
}

let month = prompt('What month is it?').toLowerCase();
seasons = ["Autumn","Winter","Spring","Summer"]
switch (true) {
  case month === 'september' || month === 'october' || month === 'november':
    alert(`${month} is in ${seasons[0]}.`)
  break;

  case month === 'december' || month === 'january' || month === 'february':
    alert(`${month} is in ${seasons[1]}.`)
  break;

  case month === 'march' || month === 'april' || month === 'may':
    alert(`${month} is in ${seasons[2]}.`)
  break;

  case month === 'june' || month === 'july' || month === 'august':
    alert(`${month} is in ${seasons[3]}.`)
  break;


}



console.log(month)
