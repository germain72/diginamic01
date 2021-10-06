//  Prototype d'Objet USER
function UserFactory(id, obj) {
  this.id = id;
  this.name = obj.name;
  this.firstname = obj.firstname;
  this.birthday = obj.birthday;
  this.address = obj.address;
  this.secu = obj.secu;

  this.fonction = obj?.fonction ? obj.fonction : " N.C ";
  this.email = obj.email
    ? obj.email
    : `${this.firstname.toLowerCase()}.${this.name.toLowerCase()}@www.fr`;
  this.tel = obj?.tel ? obj.tel : " N.C ";
  this.genre = obj?.genre ? obj.genre : " N.C ";
  this.dep = obj?.dep ? obj.dep : " Vendée ";
  this.image = obj?.image ? obj.image : "./images/OIP_2.jpg";
  this.iban = obj?.iban ? obj.iban : "N.C";
  this.bic = obj?.bic ? obj.bic : "N.C";

  this.completeInfo = function (obj) {
    for (let [key, value] of Object.entries(obj)) {
      if (this.hasOwnProperty(key)) this[key] = value;
    }
  };
}
