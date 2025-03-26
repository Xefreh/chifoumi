const pierre_button = document.querySelector("#pierre");
const feuille_button = document.querySelector("#feuille");
const ciseaux_button = document.querySelector("#ciseaux");

const reset_button = document.querySelector("#reset");

const resultats = document.querySelector("#resultats");

const regles_du_jeu = {
  pierre: "ciseaux",
  feuille: "pierre",
  ciseaux: "feuille",
};

let choix_utilisateur = "";
let choix_ordinateur = "";
let resultat = "";

let victoires = 0;
let defaites = 0;
let egalites = 0;

function jouer(event) {
  choix_utilisateur = event.target.id;

  const choix = Object.keys(regles_du_jeu);
  const randomIndex = Math.floor(Math.random() * choix.length);
  choix_ordinateur = choix[randomIndex];

  if (choix_utilisateur === choix_ordinateur) {
    resultat = "Egalité";
    egalites++;
  } else if (regles_du_jeu[choix_utilisateur] === choix_ordinateur) {
    resultat = "Victoire";
    victoires++;
  } else {
    resultat = "Défaite";
    defaites++;
  }

  mettre_a_jour_score();
}

function mettre_a_jour_score() {
  resultats.innerHTML = `
    <p>Votre choix : ${choix_utilisateur}</p>
    <p>Choix de l'ordinateur : ${choix_ordinateur}</p>
    <p>Résultat : <span>${resultat}</span></p>
    


    <p>Victoires : ${victoires}</p>
    <p>Défaites : ${defaites}</p>
    <p>Égalités : ${egalites}</p>
  `;
}

function reset() {
  choix_utilisateur = "";
  choix_ordinateur = "";
  resultat = "";
  victoires = 0;
  defaites = 0;
  egalites = 0;
  mettre_a_jour_score();
}

pierre_button.addEventListener("click", jouer);
feuille_button.addEventListener("click", jouer);
ciseaux_button.addEventListener("click", jouer);

reset_button.addEventListener("click", reset);

window.addEventListener("DOMContentLoaded", () => {
  mettre_a_jour_score();
});
