if(users){
  var lengthUserData = localStorage.length + users.length;
}
var usersDATA = [];
// APPLICATION IS READY ....!  then do it ;)

$(function () {
  // Add Users in DataBase
  users?.forEach((use, i) => {
    var user = new UserFactory(i + 1, use);
    var userCard = builderCard(user);
    usersDATA.push(user);
    $("#users-cards").append(userCard);
  });
  // Add Users in localStorage 
  if (localStorage.length) {
    for (let i = users.length; i < lengthUserData; i++) {
      var use = localStorage.getItem(i);
      var user = new UserFactory(i + 1, JSON.parse(use));
      var userCard = builderCard(user);
      usersDATA.push(user);
      $("#users-cards").append(userCard);
    }
  }
  $("#users-cards")
    .find("button")
    .on("click", function () {
      var btnIndex = $("button#btn-edit").index(this);
      var userEdit = usersDATA[btnIndex];

      console.log("%c⧭", "color: #8c0038", JSON.stringify(userEdit));
      sessionStorage.setItem("btnEdit", JSON.stringify(userEdit));
    })
  
});
