var user = JSON.parse(sessionStorage.getItem("btnEdit"));
// data transfer user via sessionStorage
$(function () {
  // no pre-selection
  //   $("#select_genre").children().removeAttr("selected");
  //   selected type of
  var child = user.genre === "Femme" ? 0 : 1;
  $("#select_genre").children().eq(child).attr("selected", "selected");
  //   assign value
  $("#photo-user").attr("src", user.image);
  $("#name").val(user.name);
  $("#firstname").val(user.firstname);
  $("#birthday").val(user.birthday);
  $("#address").val(user.address);
  $("#social_secu").val(user.secu);
  $("#telephone").val(user.tel);
  $("#post_dep").val(user.dep);
  $("#post_fonction").val(user.fonction);
  $("#post_iban").val(user.iban);
  $("#post_bic").val(user.bic);
  //  deactivate the form
  $(".form-control").attr("disabled", "disabled");
  //   toggle() form --> active or deactivate
  $("#locking").on("click", function () {
    if (this.hasAttribute("checked")) {
      this.removeAttribute("checked");
      $(".form-control").removeAttr("disabled");
    } else {
      $("#locking").attr("checked", "checked");
      $(".form-control").attr("disabled", "disabled");
    }
  });
});
