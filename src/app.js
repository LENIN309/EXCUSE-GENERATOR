/* eslint-disable */
import "bootstrap";
import "./style.css";

const who = ["The dog", "My grandma", "His turtle", "My bird"];
const action = ["ate", "peed", "crushed", "broke"];
const what = ["my homework", "the keys", "the car"];
const when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  const randomSentence = () => {
    // get a random index from an array using math random
    const randomWho = who[Math.floor(Math.random() * who.length)];
    const randomAction = action[Math.floor(Math.random() * action.length)];
    const randomWhat = what[Math.floor(Math.random() * what.length)];
    const randomWhen = when[Math.floor(Math.random() * when.length)];

    //combine all random variables into a sentence
    const newSentence = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
    return newSentence;
  };
  randomSentence();

  console.log(randomSentence);
  document.getElementById("excuse").innerHTML = randomSentence;
};
