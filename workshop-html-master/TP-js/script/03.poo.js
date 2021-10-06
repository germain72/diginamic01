// Object
function Personne(nom, prenom, pseudo) {
  this.nom = nom;
  this.prenom = prenom;
  this.pseudo = pseudo;

  this.getNomComplet = function () {
    return `Nom : ${this.nom}  Prénom : ${this.prenom}  Pseudo : ${this.pseudo}`;
  };
}
function Client(nom, prenom, pseudo, numeroClient) {
  Personne.call(this, nom, prenom, pseudo);
  this.numeroClient = numeroClient;

  this.getInfos = function () {
    return `Tel: ${this.numeroClient} - Name: ${this.nom} - firstName: ${this.prenom}`;
  };
}
function robert() {
  this.nom = "Robert";
  this.prenom = "LEPREFET";
  this.pseudo = "robert77";

  this.getNomComplet = function () {
    return `Nom : ${this.nom}  Prénom : ${this.prenom}  Pseudo : ${this.pseudo}`;
  };
}
// Function
function afficherPersonne(obj) {
  return `  Le nom de l'objet : ${obj.nom}
  Le prénom de l'objet : ${obj.prenom}
  Le pseudo de l'objet : ${obj.pseudo}
  le nom complet de l'objet : ${obj.getNomComplet()}
  `;
}
function initiales() {
  return ` Initiales : ${this.nom.charAt(0)} - ${this.prenom.charAt(0)}`;
}

// Variables
var jules = new Personne("Jules", "LEMAIRE", "Jules77");
var paul = new Personne("Paul", "LEMAIRE", "Paul44");
var robertObject = new robert();
var steve = new Client("Steve", "LUCAS", "steve44", "A01");

jules.pseudo = "jules44";

// Affichages
console.log(jules.getNomComplet());
console.log(afficherPersonne(jules));
console.log(afficherPersonne(paul));

// console.log(afficherPersonne(robert)); // error create instance
console.log(afficherPersonne(robertObject));

// test après modification du pseudo
console.log(jules.pseudo);

// test Ajout de la propriété "age" sur l'objet --> jules
jules.age;
console.log(jules.age);

// test Ajout de la propriété "age" sur l'objet prototype --> Personne
Personne.prototype.age = "NON RENSEIGNE";
console.log(jules.age);
jules.age = 30;
console.log(jules.age);

// test initiales
Personne.prototype.getInitiales = initiales;
console.log(jules.getInitiales());
// test héritage
console.log(afficherPersonne(steve));
console.log(steve.numeroClient);
console.log(steve.getInfos());
