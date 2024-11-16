/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


  window.onload = function() {
    const domains = generateAllDomains();
    domains.forEach(domain => console.log(domain));
  };

//write your code here
function generateAllDomains() {
  let pronoun = ['the','our', 'my', 'your', 'his'];
  let adj = ['great', 'big', 'small', 'fast', 'slow'];
  let noun = ['jogger', 'racoon', 'dog', 'cat', 'fish'];

  let domains = [];
  for (let p of pronoun) {
    for (let a of adj) {
      for (let n of noun) {
        domains.push(`${p}${a}${n}.com`);
      }
    }
  }

  return domains
}

