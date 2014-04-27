/******** Logic Portion ********
  * Track Beats per measure
  * Track Measures
  * Track notes, rests, etc for saving in JSON
  * Draw Notes in mass by storing in array
*********                      *******/



$(document).ready(function() {

  var indicator = Snap("svg").line(390, 45, 420, 45);
  indicator.attr({
    stroke: "#000"
  });

  $('#svg').click(function(e) {

    var offset = $(this).offset(),
          x = e.clientX - offset.left,
          y = e.clientY - offset.top,
          activeItem = "qN";
    $('#x-axis').html(x);
    $('#y-axis').html(y);

    if (y <= 50) {
      switch (true) {

        case x > 380 && x < 420:
          activeItem = "wN";
          console.log(activeItem);
          indicator.animate({x1:390, x2: 420}, 500);
          break;

        case x > 430 && x < 470:
          activeItem = "hN";
          console.log(activeItem);
          indicator.animate({x1:440, x2: 470}, 500);
          break;

        case x > 480 && x < 520:
          activeItem = "qN";
          console.log(activeItem);
          indicator.animate({x1:490, x2: 520}, 500);
          break;

        case x > 530 && x < 570:
          activeItem = "eN";
          console.log(activeItem);
          indicator.animate({x1:540, x2: 570}, 500);
          break;

        case x > 580 && x < 620:
          activeItem = "eNS";
          console.log(activeItem);
          indicator.animate({x1:590, x2: 630}, 500);
          break;

        case x > 630 && x < 670:
          activeItem = "wR";
          console.log(activeItem);
          indicator.animate({x1:640, x2: 680}, 500);
          break;

        case x > 680 && x < 720:
          activeItem = "hR";
          console.log(activeItem);
          indicator.animate({x1:680, x2: 730}, 500);
          break;

        case x > 730 && x < 770:
          activeItem = "qR";
          console.log(activeItem);
          indicator.animate({x1:740, x2: 770}, 500);
          break;

        case x > 780 && x < 820:
          activeItem = "eR";
          console.log(activeItem);
          indicator.animate({x1:790, x2: 820}, 500);
          break;

        default:
          activeItem = activeItem;
          console.log("Default: " + activeItem);
          break;
      } // Switch
    } // If

  });
});

/*** Test Portion ***/
$(document).ready(function() {

  var controls = new ControlBar();

  startStave();

  var wholeNote = new WholeNote(470, 113);

  var halfNote = new HalfNote(720, 103);

  var eighthNote = new EighthNote(960, 85);

  var wholeRest = new WholeRest(165, 266);

  var halfRest = new HalfRest(465, 276);

  var natural = new Natural(450, 110);

  var dot = new Dot(497, 125);

  var eighthNotes = new EighthNotes(1100, 102);

  var quarterRest = new QuarterRest(750, 255);

  var eighthRest = new EighthRest(1070, 256);

  for (var i = 0; i < 22; i++) {
    addMeasure();
  }

  endStave();
});