const titre = document.getElementsByTagName("h1")[0];
let titreModifie = false;

titre.addEventListener("click", changeTitle);

function changeTitle(e) {
  e.preventDefault();
  if (!titreModifie) {
    titre.style.color = "green";
    titre.style.fontSize = "5em";
    titreModifie = true;
  } else {
    titre.style.color = "";
    titre.style.fontSize = "";
    titreModifie = false;
  }
}