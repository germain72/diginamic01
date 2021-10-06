// Events
var btn_comfirm = document.getElementById("modalSubmit");
var btn_create = document.getElementById("form-valid");

// Champs
var forms = document.querySelectorAll(".form-list");
var modals = document.querySelectorAll(".modal-list");
var newUser = {};
var errors = [];

// save in locaStore
var saveToLocalStorage = function () {
  $("#confirm_modal").modal("hide");

  var index = users.length+localStorage.length
  localStorage.setItem(index,JSON.stringify(newUser))
};

// form in Modal
var transfertInfoUserToModal = function () {
  forms.forEach((form, i) => {
    newUser[form.name] = form.value;
    modals[i].innerHTML = form.value;
    errors.push(formIsValide(form));
  });
  errors.forEach((e) => {
    // TODO gestion des erreurs
    console.log("%c⧭", "color: #f279ca", e);
  });
  $("#confirm_modal").modal("show");
};

// Elements to Events
btn_create.addEventListener("click", transfertInfoUserToModal);
btn_comfirm.addEventListener("click", saveToLocalStorage);

