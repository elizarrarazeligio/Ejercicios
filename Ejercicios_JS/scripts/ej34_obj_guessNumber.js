/* Imagine you are creating a game where the user has to guess the correct number.
But there is a limit of how many guesses the user can do.

If the user tries to guess more than the limit, the function should throw an error.
If the user guess is right it should return true.
If the user guess is wrong it should return false and lose a life.
Can you finish the game so all the rules are met? */

class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    return this.lives === 0
      ? alert("error already dead")
      : n === this.number
      ? true
      : this.lives-- && false;
  }
}

const trial1 = new Guesser(10, 3);

console.log(trial1.guess(2), trial1.lives);
console.log(trial1.guess(1), trial1.lives);
console.log(trial1.guess(0), trial1.lives);
console.log(trial1.guess(10), trial1.lives);
