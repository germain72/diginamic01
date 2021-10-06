var test = {};

$(() => {
  var newNameUser = localStorage.getItem("name");
  var newFirstnameUser = localStorage.getItem("firstname");
  var newBirthdayUser = localStorage.getItem("birthday");
  var newAddressUser = localStorage.getItem("address");
  var newSocialSecuUser = localStorage.getItem("social_security");
  if (newNameUser !== "")
    test[newNameUser] = { name: newNameUser, prenom: newFirstnameUser };
  localStorage.clear();
  $(".btn-edition").on("click", function () {});

  console.log("%c⧭", "color: #ffa280", test);
  //   console.log(
  //     "%c⧭",
  //     "color: #00258c",
  //     newNameUser,
  //     newFirstnameUser,
  //     newBirthdayUser,
  //     newAddressUser,
  //     newSocialSecuUser
  //   );
});
