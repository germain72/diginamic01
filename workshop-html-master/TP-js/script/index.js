// Create new table row
function ClientUser(id, name, password) {
  this.id = id;
  this.name = name;
  this.password = password;
  // buildRow
  this.createRowTable = function () {
    let tr = document.createElement("tr");
    tr.className = "table-success";
    return this.buildTh(tr);
  };
  // buildCol
  this.buildTh = function (tr) {
    for (let i = 0; i < 3; i++) {
      let row;
      switch (i) {
        case 0:
          row = document.createElement("th");
          row.setAttribute("scope", "row");
          row.innerText = this.id;
          break;
        case 1:
          row = document.createElement("td");
          row.innerText = this.name;
          break;
        case 2:
          row = document.createElement("td");
          row.innerText = this.password;
      }
      tr.appendChild(row);
    }
    return tr;
  };
}
// clear Form
function resetForm() {
  form_userAdd.name.value = "";
  form_userAdd.password.value = "";
}
// submit Form to add user in the table
form_userAdd.onsubmit = (e) => {
  e.preventDefault();
  var lastElement = document.querySelectorAll("tr");
  var id = lastElement.length;
  var name = form_userAdd.name.value;

  // condition for write new user
  if (typeof password === "undefined" && name !== "") {
    var password = form_userAdd.password.value;
    var row = new ClientUser(id, name, password);
    var lastEl = lastElement[--id];
    lastEl.classList.remove("table-success");
    lastEl.parentElement.appendChild(row.createRowTable());
  }
  resetForm();
};
