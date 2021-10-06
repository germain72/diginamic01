var FORM_KEY = ["name", "firstname", "birthday", "address", "social_security"];

var formIsValide = function (form) {
  switch (form.name) {
    case FORM_KEY[0]:
    case FORM_KEY[1]:
      var exp = new RegExp(/^[a-z^¨èé\S]{3,25}$/gi);
      return !exp.test(form.value) ? form.name : "";
    case FORM_KEY[2]:
      var exp = new RegExp(/^[0-1]?[0-9]{1}\/[0-1]{1}[0-9]{1}\/[0-9]{2,4}$/i);
      return !exp.test(form.value) ? form.name : "";
    case FORM_KEY[4]:
      var exp = new RegExp(/^[0-9]{10,13}$/i);
      return !exp.test(form.value) ? form.name : "";
    default:
      return "";
  }
};
