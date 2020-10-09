let averageJohnTeam = (116+94+123)/3;
console.log(averageJohnTeam)
let averageMikeTeam = (116+94+123)/3;
console.log(averageMikeTeam)

if (averageJohnTeam < averageMikeTeam) {
  console.log(`Mike\'s team wins with ${averageMikeTeam} points`); 
} else if (averageJohnTeam == averageMikeTeam) {
  console.log(`No winner.DRAW!`);
} else {
  console.log(`John\'s team wins with ${averageJohnTeam} points`);
}


