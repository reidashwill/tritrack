$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    var sideOne = parseInt($("input#side1").val());
    console.log(sideOne);
    var sideTwo = parseInt($("input#side2").val());
    console.log(sideTwo);
    var sideThree = parseInt($("input#side3").val());
    console.log(sideThree);

    if (
      sideOne === undefined ||
      sideTwo === undefined ||
      sideThree === undefined
    ) {
      $("#not-a-triangle").show();
    } else if (
      sideOne > sideTwo + sideThree ||
      sideTwo > sideOne + sideThree ||
      sideThree > sideTwo + sideOne
    ) {
      $("#not-a-triangle").show();
    } else if (sideOne === sideTwo && sideOne === sideThree) {
      $("#equilateral").show();
    } else if (
      (sideOne != sideTwo && sideOne === sideThree) ||
      (sideOne === sideTwo && sideOne != sideThree)
    ) {
      $("#isoceles").show();
    } else $("#isosolese").show();
  });
});
