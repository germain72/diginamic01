// retourne vrai ou faux si la lettre est dans le mot
var searchLetter = (str, letter) => {
  return str.indexOf(letter) !== -1 ? true : false;
};
// retourne true ou false si le mot se termine par s
var wordEndBy_s = (str) => str.length - 1 === str.indexOf("s");

// Variables
var villes = ["nantes", "paris", "saint-nazaire", "angers", "le mans"];
var lettreADansToutesLesVilles = villes.every((el) => searchLetter(el, "a"));
var auMoinsUneVilleAvecUnTiret = villes.some((el) => searchLetter(el, "-"));
var villesSansTiretSansEspace = villes.filter((el) => {
  return !searchLetter(el, "-") && !searchLetter(el, " ");
});
var villesMajusculeSeTerminantParS = villes
  .filter((v) => wordEndBy_s(v))
  .map((v) => v.toUpperCase());

//  Affichages
villes.forEach((ville) => {
  console.log(ville);
});
console.log(lettreADansToutesLesVilles);
console.log(auMoinsUneVilleAvecUnTiret);
console.log(villesSansTiretSansEspace);
console.log(villesMajusculeSeTerminantParS);
