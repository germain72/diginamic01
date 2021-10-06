console.log("01-Fonctions");
//** FUNCTION */
// ADD
function additionner(nb1, nb2) {
  return nb1 + nb2;
}
// MULTI
function multiplier(nb1, nb2) {
  return nb1 * nb2;
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function viewOp(operation, nb1, nb2) {
  return `${capitalize(operation.name)}(${nb1}, ${nb2}) = ${operation(
    nb1,
    nb2
  )}`;
}
//** fin function */

// Variables Globales
var nombre1 = 10;
var nombre2 = 20;
var somme = additionner;
var multiplication = multiplier;
var afficherOperation = viewOp;

var resultat1 = additionner(nombre1, nombre2);
var resultat2 = somme(nombre1, nombre2);
var resultat3 = multiplication(nombre1, nombre2);
var soustraction = (nb1,nb2)=>{return nb1-nb2 }
// controls value resultat
// console.log(resultat2);
// console.log(resultat3);
console.log(afficherOperation(somme, 20, 40));
console.log(afficherOperation(multiplication, 10, 20));
console.log(afficherOperation(soustraction, 15, 5));
