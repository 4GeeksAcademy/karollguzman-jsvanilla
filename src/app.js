/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function() {
  const domains = generateAllDomains();
  const domainList = document.getElementById("domain-list");

  domains.forEach(domain => {
    // Imprimir el dominio en la consola
    console.log(domain);

    // Crear un nuevo div para cada dominio
    const domainItem = document.createElement("div");
    domainItem.className = "card m-2 p-2"; // Añadir clases de Bootstrap para estilizar el recuadro
    domainItem.textContent = domain;

    // Añadir el div al contenedor domain-list
    domainList.appendChild(domainItem);
  });
};


function generateAllDomains() {
 const pronouns = ['the','our', 'my', 'your', 'his'];
 const adjectives = ['great', 'big', 'small', 'fast', 'slow'];
 const nouns = ['jogger', 'racoon', 'dog', 'cat', 'fish'];

  const domains = [];
  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        domains.push(`${pronoun}${adjective}${noun}.com`);
      }
    }
  }

  return domains
}

