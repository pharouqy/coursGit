const titre = document.getElementsByTagName("h1")[0];

titre.addEventListener("click", (e) => {
  e.preventDefault();
  titre.style.color = "green";
  titre.style.fontSize = "5em";
});
