//window.onload = function () {
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

  function drawStave() {
    var controls = new ControlBar();

    startStave();

    for (var i = 0; i < 22; i++) {
      addMeasure();
    }

    endStave();
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

function WholeNote(x, y){
  this.x = x; // 420
  this.y = y; // 86.5

  var wholeNote = paper.image("/svg/WholeNote.svg", this.x, this.y, 23, 23);
}

function HalfNote(x, y) {
  this.x = x;
  this.y = y;

  var halfNote = paper.image("/svg/HalfNote.svg", this.x, this.y, 20, 65);
}

function QuarterNote(x, y) {
  this.x = x;
  this.y = y;

  var quaterNote = paper.image("/svg/QuaterNote.svg", this.x, this.y, 20, 65);
}

function EighthNotes(x, y) {
  this.x = x;
  this.y = y;

  var partOne = paper.image("/svg/QuaterNote.svg", this.x, this.y, 20, 65);
  var partTwo = paper.image("/svg/QuaterNote.svg", this.x + 40, this.y, 20, 65);
  var beam = paper.line(this.x + 19, this.y + 6.5, this.x + 60, this.y + 6.5);
  beam.attr({
    stroke: "#000",
    strokeWidth: 5
  });
}

function EighthNote(x, y) {
  this.x = x;
  this.y = y;

  var eighthNote = paper.image("/svg/eighthNote.svg", this.x, this.y, 30, 100);
}


/******** Draw Rests ********/

function WholeRest(x, y) {
  this.x = x;
  this.y = y;

  var wholeRest = paper.rect(this.x, this.y, 20, 5);
  wholeRest.attr({
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

function QuarterRest(x, y) {
  this.x = x;
  this.y = y;

  var quarterRest = paper.image("/svg/QuarterRest.svg", this.x, this.y, 20, 50);
}

function EighthRest(x, y) {
  this.x = x;
  this.y = y;

  var eighthRest = paper.image("/svg/EighthRest.svg", this.x, this.y, 20, 50);
}


/******** Draw Annotations ********/

function Sharp(x, y) {
  this.x = x;
  this.y = y;
  var sharp = paper.image("/svg/sharp.svg", this.x, this.y, 20, 50);
}

function Flat(x, y) {
  this.x = x;
  this.y = y;
  var flat = paper.image("/svg/flat.svg", this.x, this.y, 55, 60);
}

function Natural(x, y) {
  this.x = x;
  this.y = y;
  var natural = paper.image("/svg/natural.svg", this.x, this.y, 20, 30);
}

function Dot(x, y) {
  this.x = x;
  this.y = y;
  var dot = paper.circle(this.x, this.y, 2.5);
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

/******** Controls ********/

function ControlBar() {
  var divider = paper.line(10, 50, 1240, 50);
  divider.attr({
    stroke: "#000"
  });

  var wNote = paper.image("svg/WholeNote.svg", 400, 10, 10, 30);
  var hNote = paper.image("svg/HalfNote.svg", 450, 10, 10, 30);
  var qNote = paper.image("/svg/QuaterNote.svg", 500, 10, 10, 30);
  var eNote = paper.image("/svg/EighthNote.svg", 550, 10, 15, 30);
  var eNotes = paper.image("/svg/EighthNotes.svg", 600, 5, 25, 45);

  var wRest = new WholeRest(650, 25);
  var hRest = new HalfRest(700, 20);
  var qRest = paper.image("/svg/QuarterRest.svg", 750, 10, 10, 30);
  var eRest = paper.image("svg/EighthRest.svg", 800, 10, 10, 30);
}


//};