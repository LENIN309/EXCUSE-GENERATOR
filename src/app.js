/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

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

  const type1 = function() {
    const getRandomInt = Math.floor(Math.random() * who.length);
    const randomWho = who[getRandomInt];
    // const randomAction = action[getRandomInt];
    // const randomWhat = who[getRandomInt];
    // const randomWhen = who[getRandomInt];
    console.log(randomWho);
    return `${randomWho}`;
  };
  type1();

  document.getElementById("excuse").innerHTML = type1;
};
