// icons different
var check = `icon-radio-checked`;
var uncheck = `icon-radio-unchecked`;
var addSvgElement = function (el) {
  var svg = `<svg class="icon offset-2 col-4">
                  <use
                    xlink:href="./svg/symbol-defs.svg#icon-radio-checked2"
                  ></use>
                </svg>`;
  $(el).append(svg);
};
// function buid svg icon
var queryBuilderSvg = function (el, elIndex, nb) {
  //   search in container-fluid => h4 child
  var elRow = $(el).children().eq(1).children().eq(elIndex);
  // search attribute data
  var elData = $(elRow).children().eq(0).attr("data");
  var opt = uncheck;
  if (nb < elData) {
    opt = check;
  }
  var svg = `<svg class="icon ${opt} eval col-1 "> <use xlink:href="./svg/symbol-defs.svg#${opt}"></use></svg>`;
  $(elRow).append(svg);
};
var selectedLevelCompetence = function (name) {
  console.log("%c⧭", "color: #f200e2", name);
  var child = $(`${name}`).children().eq(1).find("svg");
  var index = findIndexBorder(child.index(this));
  for (let i = index.start; i < index.end; i++) {
    if (i > index.middle) {
      child
        .children()
        .eq(i)
        .attr("xlink:href", "./svg/symbol-defs.svg#icon-radio-unchecked ");
    } else {
      child
        .children()
        .eq(i)
        .attr("xlink:href", "./svg/symbol-defs.svg#icon-radio-checked ");
    }
  }
};

$(function () {
  for (let i = 0; i < 5; i++) {
    // Build icon checked / uncheked section languages
    queryBuilderSvg("#languages", 0, i);
    queryBuilderSvg("#languages", 1, i);
    queryBuilderSvg("#languages", 2, i);
    queryBuilderSvg("#languages", 3, i);
    // Build icon checked / uncheked section frameworks
    queryBuilderSvg("#frameworks", 0, i);
    queryBuilderSvg("#frameworks", 1, i);
    queryBuilderSvg("#frameworks", 2, i);
    queryBuilderSvg("#frameworks", 3, i);
  }
  //   set the frameworks level
  $("#frameworks")
    .children()
    .eq(1)
    .find("svg")
    .on("click", function () {
      var child = $("#frameworks").children().eq(1).find("svg");
      var index = findIndexBorder(child.index(this));
      for (let i = index.start; i < index.end; i++) {
        if (i > index.middle) {
          child
            .children()
            .eq(i)
            .attr("xlink:href", "./svg/symbol-defs.svg#icon-radio-unchecked ");
        } else {
          child
            .children()
            .eq(i)
            .attr("xlink:href", "./svg/symbol-defs.svg#icon-radio-checked ");
        }
      }
    });
  //   set the language level
  $("#languages")
    .children()
    .eq(1)
    .find("svg")
    .on("click", function () {
      var child = $("#languages").children().eq(1).find("svg");
      var index = findIndexBorder(child.index(this));
      for (let i = index.start; i < index.end; i++) {
        if (i > index.middle) {
          child
            .children()
            .eq(i)
            .attr("xlink:href", "./svg/symbol-defs.svg#icon-radio-unchecked ");
        } else {
          child
            .children()
            .eq(i)
            .attr("xlink:href", "./svg/symbol-defs.svg#icon-radio-checked ");
        }
      }
    });
 
 addSvgElement(".separate");
});
