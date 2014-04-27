/******** Logic Portion ********
  * Track Beats per measure
  * Track Measures
  * Track notes, rests, etc for saving in JSON
  * Draw Notes in mass by storing in array
*********                      *******/

function setActiveNote(userX) {
  this.mouseX = userX;
   switch (true) {

        case this.mouseX > 380 && this.mouseX < 420:
          item = "wN";
          indicatorCoord = {x1:390, x2: 420};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 430 && this.mouseX < 470:
          item = "hN";
          indicatorCoord = {x1:440, x2: 470};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 480 && this.mouseX < 520:
          item = "qN";
          indicatorCoord = {x1:490, x2: 520};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 530 && this.mouseX < 570:
          item = "eN";
          indicatorCoord = {x1:540, x2: 570};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 580 && this.mouseX < 620:
          item = "eNS";
          indicatorCoord = {x1:590, x2: 630};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 630 && this.mouseX < 670:
          item = "wR";
          indicatorCoord = {x1:640, x2: 680};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 680 && this.mouseX < 720:
          item = "hR";
          indicatorCoord = {x1:680, x2: 730};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 730 && this.mouseX < 770:
          item = "qR";
          indicatorCoord = {x1:740, x2: 770};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;

        case this.mouseX > 780 && this.mouseX < 820:
          item = "eR";
          indicatorCoord = {x1:790, x2: 820};
          returnItems = {selected: item, coord: indicatorCoord};
          return returnItems;
          //break;
      } // Switch
}

function drawNote(userX, userY, activeItem) {
  switch (activeItem) {
        case "wN":
          item = new WholeNote(userX - 12, userY - 12);
          //return ;
          break;
        case "hN":
          item = new HalfNote(userX - 12, userY - 55);
          //return ;
          break;
        case "qN":
          item = new QuarterNote(userX - 12, userY - 55);
          //return ;
          break;
        case "eN":
          item = new EighthNote(userX - 12, userY - 73);
          //return ;
          break;
        case "eNS":
          item = new EighthNotes(userX - 12, userY - 55);
          //return ;
          break;
        case "wR":
          item = new WholeRest(userX - 10, userY - 1);
          //return ;
          break;
        case "hR":
          item = new HalfRest(userX - 10, userY - 7);
          //return ;
          break;
        case "qR":
          item = new QuarterRest(userX - 8, userY - 27);
          //return ;
          break;
        case "eR":
          item = new EighthRest(userX - 8, userY - 25);
          //return ;
          break;
      } // Switch
}


$(document).ready(function() {

  var indicator = Snap("svg").line(390, 45, 420, 45),
        activeItem = "wN",
        itemTracker = {},
        i = 0;
  indicator.attr({
    stroke: "#000"
  });

  $('#svg').click(function(e) {

    var offset = $(this).offset(),
          x = e.pageX - offset.left,
          y = e.pageY - offset.top;

    if (y <= 50) {
      returnArray = setActiveNote(x);
      indicator.animate({x1: returnArray.coord.x1, x2: returnArray.coord.x2}, 500);
      activeItem = returnArray.selected;
    } else {
      drawNote(x, y, activeItem);
    } // If

  });
});