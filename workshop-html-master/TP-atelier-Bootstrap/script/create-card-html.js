var capital = function (str) {
  return str ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : str;
};

// Création de la partie CARD HEADER
/* <div class="card-header">
  <div class="card-title">
    <h5>Nom prénom</h5>
  </div>
</div>; */
var createCardHeader = function (obj) {
  var divHead = document.createElement("div");
  divHead.className = "card-header";
  var divTitle = document.createElement("div");
  divTitle.className = "card-title";
  var hname = document.createElement("h5");
  var name = document.createTextNode(
    `${capital(obj.firstname)} ${capital(obj.name)}`
  );
  hname.appendChild(name);
  divTitle.appendChild(hname);
  divHead.appendChild(divTitle);
  return divHead;
};
// Création de la partie de SPECIFICATION
/* 
           <div class="func d-flex">
            <h6>description :</h6>
            <p class="pl-3">state</p>
          </div>
*/
var createCardSpecifie = function (description, state) {
  var div = document.createElement("div");
  div.className = "func d-flex";
  var hText = document.createElement("h6");
  var text = document.createTextNode(capital(description));
  hText.appendChild(text);
  var pText = document.createElement("p");
  pText.className = "pl-3";
  text = document.createTextNode(capital(state));
  pText.appendChild(text);
  div.appendChild(hText);
  div.appendChild(pText);
  return div;
};
var createCardBody = function (obj) {

  // <div class="card-body d-flex"> ligne 134 index.html
  var divPrinc = document.createElement("div");
  divPrinc.className = "card-body d-flex";
  var divImg = document.createElement("div");
  divImg.className = "mr-2 my-auto";
  var img = document.createElement("img");
  img.className = "card-img-top";
  img.setAttribute("src", obj.image);
  img.setAttribute("alt", "photo user");
  divImg.appendChild(img);

  // <div class="col"> ligne 142 index.html
  var divMiddle = document.createElement("div");
  divMiddle.className = "col";

  // creation des sections de spécifications
  var divFunc = createCardSpecifie("fonction", obj.fonction);
  var divDep = createCardSpecifie("département", obj.dep);
  var divEmail = createCardSpecifie("email", obj.email);
  var divTel = createCardSpecifie("téléphone", obj.tel);

  //   div de fin avec le button Editer ligne 159 index.html
  var divEnd = document.createElement("div");
  divEnd.className = "d-flex justify-content-end";
  var alink = document.createElement("a");
  alink.setAttribute("href", "./editer.html");
  var btn = document.createElement("button");
  btn.className = "btn btn-danger btn-edition";
  btn.setAttribute('id','btn-edit')
  var btnText = document.createTextNode("Editer");

  //  rattachement à la div de fin
  btn.appendChild(btnText);
  alink.appendChild(btn);
  divEnd.appendChild(alink);
  //  rattachement à la div du millieu
  divMiddle.appendChild(divFunc);
  divMiddle.appendChild(divDep);
  divMiddle.appendChild(divEmail);
  divMiddle.appendChild(divTel);
  divMiddle.appendChild(divEnd);
  //   rattachement à la div principal
  divPrinc.appendChild(divImg);
  divPrinc.appendChild(divMiddle);

  return divPrinc;
};
// creation de la CARD d'un User
var builderCard = function (obj) {
  var articleCard = document.createElement("article");
  articleCard.className =
    " col-xl-4 col-md-6 col-xs-12 mb-4 d-flex justify-content-center";
  var divCard = document.createElement("div");
  divCard.className = "card";
  var header = createCardHeader(obj);
  var body = createCardBody(obj);
  divCard.appendChild(header);
  divCard.appendChild(body);
  articleCard.appendChild(divCard);
  return articleCard;
};
