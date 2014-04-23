window.onload = function () {
  var paper = Snap("#svg");

  var line = 1, measure = 1, measureCount = 0;


/******** Draw Stave and Measures ********/

  function startStave() {

    var stave = paper.image("/svg/TrebleClef.svg", 320, 77.75, 31.4985 * 1.5, 77.641 * 1.5);

    var x = 320, y = 148.75, factor = 16.25;

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
      x = 320 + (300 * measureCount);
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

function drawWholeNote(x, y){
  var wholeNote = paper.image("/svg/WholeNote.svg", x, y, 110.5, 76);
}

function WholeNote(x, y){
  this.x = x; // 420
  this.y = y; // 86.5

  var wholeNote = paper.image("/svg/WholeNote.svg", this.x, this.y, 110.5, 76);
}

function drawHalfNote() {
  var halfNote = paper.image("/svg/HalfNote.svg", 720, 94, 55, 82);
}

function HalfNote(x, y) {
  this.x = x;
  this.y = y;

  var halfNote = paper.image("/svg/HalfNote.svg", this.x, this.y, 55, 82);
}

function drawQuaterNote() {
  var quaterNote = paper.image("/svg/QuaterNote.svg", 960, 95.5, 55, 85);
}

function QuaterNote(x, y) {
  this.x = x;
  this.y = y;

  var quaterNote = paper.image("/svg/QuaterNote.svg", this.x, this.y, 55, 85);
}

function drawEighthNotes() {
  var partOne = paper.image("/svg/QuaterNote.svg", 1050, 95.5, 55, 85);
  var partTwo = paper.image("/svg/QuaterNote.svg", 1090, 95.5, 55, 85);
  var beam = paper.line(1087, 102, 1128.5, 102);
  beam.attr({
    stroke: "#000",
    strokeWidth: 5
  });
}

function EighthNotes(x, y) {
  this.x = x;
  this.y = y;

  var partOne = paper.image("/svg/QuaterNote.svg", this.x, this.y, 55, 85);
  var partTwo = paper.image("/svg/QuaterNote.svg", this.x + 40, this.y, 55, 85);
  var beam = paper.line(this.x + 37, this.y + 6.5, this.x + 78.5, this.y + 6.5);
  beam.attr({
    stroke: "#000",
    strokeWidth: 5
  });
}

function drawEighthNote() {
  var eighthNote = paper.image("/svg/eighthNote.svg", 960, 94, 55, 85);
}

function EighthNote(x, y) {
  this.x = x;
  this.y = y;

  var eighthNote = paper.image("/svg/eighthNote.svg", this.x, this.y, 55, 85);
}


/******** Draw Rests ********/

function drawWholeRest() {
  var wholeRest = paper.rect(165, 266, 20, 5);
  wholeRest.attr({
    stroke: "#000",
    fill: "#000"
  });
}

function WholeRest(x, y) {
  this.x = x;
  this.y = y;

  var wholeRest = paper.rect(this.x, this.y, 20, 5);
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

function HalfRest(x, y) {
  this.x = x;
  this.y = y;

  var halfRest = paper.rect(this.x, this.y, 20, 5);
  halfRest.attr({
    stroke: "#000",
    fill: "#000"
  });
}

function drawQuarterRest() {}

function drawEighthRest() {}


/******** Draw Annotations ********/

function drawSharp() {
  var sharp = paper.image("/svg/sharp.svg", 418, 95, 55, 60);
}

function drawFlat() {
  var flat = paper.image("/svg/flat.svg", 423, 76, 55, 60);
}

function drawNatural() {
  var natural = paper.image("/svg/natural.svg", 423, 95, 55, 60);
}

function drawDot() {
  var dot = paper.circle(493, 125, 2.5);
  dot.attr({
    fill: "#000"
  });
}

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
  * Draw Notes in mass by storing in array
*********                      *******/

/*** Test Portion ***/
  startStave();

  var wholeNote = new WholeNote(420, 86.5);

  var halfNote = new HalfNote(720, 94);

  var eighthNote = new EighthNote(960, 94);

  var wholeRest = new WholeRest(165, 266);

  var halfRest = new HalfRest(465, 276);
  drawNatural();
  drawDot();

  var eighthNotes = new EighthNotes(1050, 95.5);

  for (var i = 0; i < 22; i++) {
    addMeasure();
  }

  endStave();


};