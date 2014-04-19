window.onload = function () {
  var paper = Snap("#svg");

  var line = 1, measure = 1, measureCount = 0;


/******** Draw Stave and Measures ********/

  function startStave() {

    var stave = paper.image("/svg/TrebleClef.svg", 200, 77.75, 31.4985 * 1.5, 77.641 * 1.5);

    var x = 200, y = 148.75, factor = 16.25;

    var outline = paper.rect(x, 99.25, 300, 65);
    outline.attr({
      fill: "none",
      stroke: "#000",
      strokeWidth: 1
    });

    var ledgerOne = paper.line(x, y, x + 300, y);
    ledgerOne.attr({
      stroke: "#000"
    });
    var ledgerTwo = paper.line(x, y - factor, x + 300, y - factor);
    ledgerTwo.attr({
      stroke: "#000"
    });

    var ledgerThree = paper.line(x, y - factor * 2, x + 300, y - factor * 2);
    ledgerThree.attr({
      stroke: "#000"
    });

    measure++;
    measureCount++;
  }

  function drawMeasure() {
    var x, y, lineY, factor = 16.25;

    if (line !== 1) {
      y = 148.75 * line;
      lineY = 100 + (74 * line);
      x = 20 + (300 * (measureCount + 1));
    } else {
      y = 148.75;
      lineY = 100;
      x = 200 + (300 * measureCount);
    }

    if (line > 2) {
      lineY = 175 + (74 * line);
    }

    var outline = paper.rect(x, y - 49.5, 300, 65);
    outline.attr({
      fill: "none",
      stroke: "#000",
      strokeWidth: 1
    });

    var ledgerOne = paper.line(x, y, x + 300, y);
    ledgerOne.attr({
      stroke: "#000"
    });
    var ledgerTwo = paper.line(x, y - factor, x + 300, y - factor);
    ledgerTwo.attr({
      stroke: "#000"
    });

    var ledgerThree = paper.line(x, y - factor * 2, x + 300, y - factor * 2);
    ledgerThree.attr({
      stroke: "#000"
    });

    measureCount++;
    measure++;
  }

  function addMeasure() {
    var x = 500 + (300 * measureCount);
    if (x > 1100) {
      line++;
      newLineStave();
      measureCount = 0;
    } else {
      drawMeasure();
    }
  }

  function endStave() {
    var bigBar = paper.line(20 + (300 * (measureCount + 1)), (148.75 * line) -50, 20 + (300 * (measureCount + 1)), (148.75 * line) + 16);
    bigBar.attr({
      stroke: "#000",
      strokeWidth: 5
    });

    var smallBar = paper.line(10 + (300 * (measureCount + 1)), (148.75 * line) -50,10 + (300 * (measureCount + 1)), (148.75 * line) + 16);
    smallBar.attr({
      stroke: "#000",
      strokeWidth: 1
    });
  }

  function newLineStave() {
    var x = 20, y = 148.75 * line, factor = 16.25, lineY;

   var stave = paper.image("/svg/TrebleClef.svg", 20, (-70 + (148 * line)) + (0.5^(line-2)), 31.4985 * 1.5, 77.641 * 1.5);

    if (line > 2) {
      lineY = 175 * line;
    } else {
      lineY = 100 + (74 * line);
    }

    var outline = paper.rect(x, y -49.5, 300, 65);
    outline.attr({
      fill: "none",
      stroke: "#000",
      strokeWidth: 1
    });

    var ledgerOne = paper.line(x, y, x + 300, y);
    ledgerOne.attr({
      stroke: "#000"
    });
    var ledgerTwo = paper.line(x, y - factor, x + 300, y - factor);
    ledgerTwo.attr({
      stroke: "#000"
    });

    var ledgerThree = paper.line(x, y - factor * 2, x + 300, y - factor * 2);
    ledgerThree.attr({
      stroke: "#000"
    });

    measure++;
    measureCount++;
  }


/******** Draw Notes ********/

function drawWholeNote(){
  var wholeNote = paper.image("/svg/WholeNote.svg", 300, 86.5, 110.5, 76);
}

function drawHalfNote() {
  var halfNote = paper.image("/svg/HalfNote.svg", 600, 95.5, 55, 85);
}

function drawQuaterNote() {
  var quaterNote = paper.image("/svg/QuaterNote.svg", 900, 95.5, 55, 85);
}

function drawEightNotes() {}

function drawEightNote() {}


/******** Draw Rests ********/

function drawWholeRest() {
  var wholeRest = paper.rect(165, 266, 20, 5);
  wholeRest.attr({
    stroke: "#000",
    fill: "#000"
  });
}

function drawHalfRest() {
  var halfRest = paper.rect(465, 276, 20, 5);
  halfRest.attr({
    stroke: "#000",
    fill: "#000"
  });
}

function drawQuarterRest() {}

function drawEightRest() {}


/******** Draw Annotations ********/

function drawSharp() {
  var sharp = paper.image("/svg/sharp.svg", 303, 95, 55, 60);
}

function drawFlat() {}

function drawNatural() {}

function drawDot() {}

function drawSlur() {}

function drawTie() {} //Use slur function

function drawAccent() {}

/******** Draw Dynamics ********/

function drawFortes() {}

function drawMF() {}

function drawMP() {}

function drawPianos() {}


/******** Logic Portion ********
  * Track Beats per measure
  * Track Measures
  * Track notes, rests, etc for saving in JSON
*********                      *******/

/*** Test Portion ***/
  startStave();

  drawWholeNote();
  drawHalfNote();
  drawQuaterNote();
  drawWholeRest();
  drawHalfRest();
  drawSharp();

  for (var i = 0; i < 22; i++) {
    addMeasure();
  }

  endStave();


};