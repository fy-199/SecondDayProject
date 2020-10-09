let age = 255;
if (age > 18) {
  console.log('You can drink beer.')
} else {
  console.log('You can drink juice.')
}

switch (true) {
  case age < 13:
    console.log('John is a boy.');
    break;
  case age >= 13 && age < 20 :  
    console.log('John is a teenager.');
    break;
  case age >= 20 && age < 30 :
    console.log('John is a young man.');
    break;
  default:
    console.log('John is a man.')



}