/* You are the judge at a competitive eating competition and you need to choose a winner!

There are three foods at the competition and each type of food is worth a different amount of points. Points are as follows:

Chickenwings: 5 points
Hamburgers: 3 points
Hotdogs: 2 points

Write a function that helps you create a scoreboard. It takes as a parameter a list of objects representing the participants, for example:

[
  {name: "Habanero Hillary", chickenwings: 5 , hamburgers: 17, hotdogs: 11},
  {name: "Big Bob" , chickenwings: 20, hamburgers: 4, hotdogs: 11}
] */

function scoreboard(whoAteWhat) {
  let res = {};
  let arr = whoAteWhat.map((item) => {
    return (res = {
      name: item.name,
      score: item.chickenwings * 5 + item.hamburgers * 3 + item.hotdogs * 2,
    });
  });
  return arr.sort((a, b) => a.name.localeCompare(b.name));
}

const whoAteWhat = [
  { name: "Billy The Beast", chickenwings: 17, hamburgers: 7, hotdogs: 8 },
  { name: "Habanero Hillary", chickenwings: 5, hamburgers: 17, hotdogs: 11 },
  { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];

const WhoAteWhat2 = [
  { name: "Joey Jaws", chickenwings: 8, hamburgers: 8, hotdogs: 15 },
  { name: "Big Bob", chickenwings: 20, hamburgers: 4, hotdogs: 11 },
];

console.log(scoreboard(whoAteWhat));
console.log(scoreboard(WhoAteWhat2));
