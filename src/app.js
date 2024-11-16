/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  window.onload = function() {
    const domain = generateDomain();
    console.log(domain);
  };

//write your code here
function generateDomain() {
  let pronoun = ['the','our', 'my', 'your', 'his'];
  let adj = ['great', 'big', 'small', 'fast', 'slow'];
  let noun = ['jogger', 'racoon', 'dog', 'cat', 'fish'];

  let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
  let randomAdj = adj[Math.floor(Math.random() * adj.length)];
  let randomNoun = noun[Math.floor(Math.random() * noun.length)];

  return `${randomPronoun}${randomAdj}${randomNoun}.com`;
}

