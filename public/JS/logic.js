var measureCount = 1,
    lineCount =1,
    measureIterator = 0;

function iterateMeasureCount() {
  measureCount++;
}

function iterateLine() {
  lineCount++;
}

function measureTracker() {
  if (measureIterator <= 2) {
    measureIterator++;
  } else {
    measureIterator = 0;
  }
}

function drawMeasure(measureCount, measureIterator, lineCount) {
  var xAxisShift,
        yAxisShift,
        measure = measureCount;

  if (measure !== 1) {
    if (((measure - 1) % 4) === 0) {
      lineCount++;
      iterateLine();
    }
  }
  yAxisShift = 125 * (lineCount - 1);
  xAxisShift = 300 * measureIterator;

  var staveOuter = new Path.Rectangle(new Point(20 + xAxisShift, 173 + yAxisShift), new Point(320 + xAxisShift, 225 + yAxisShift)).strokeColor = "#000";
  var ledgerOneStart = new Point(20 + xAxisShift, 225 + yAxisShift),
        ledgerOneEnd  = new Point(320 + xAxisShift, 225 + yAxisShift);
  var ledgerOne = new Path.Line(ledgerOneStart, ledgerOneEnd);
  var ledgerTwo = new Path.Line(ledgerOneStart + [0, -13], ledgerOneEnd + [0, -13]).strokeColor = "#000";
  var ledgerThree = new Path.Line(ledgerOneStart + [0, -26], ledgerOneEnd + [0, -26]).strokeColor = "#000";
  var ledgerFour = new Path.Line(ledgerOneStart + [0, -39], ledgerOneEnd + [0, -39]).strokeColor = "#000";

  iterateMeasureCount();
  measureTracker();
}

function drawQuarter(x, y) {
  var note = new Shape.Ellipse(new Rectangle(new Point(x, y), new Size(18, 14))).rotate(-22.5).fillColor = "black";

  var stem = new Path.Line(new Point(x + 17, y + 6), new Point(x + 17, y - 40));
  stem.style = {
    strokeColor: "black",
    strokeWidth: 2
  };
}

function drawEighth(x,y) {
  var eighthOne = new Shape.Ellipse(new Rectangle(new Point(x ,y), new Size(18, 14))).rotate(-22.5).fillColor = "black";
  var eighthTwo = new Shape.Ellipse(new Rectangle(new Point(x + 30, y), new Size (18, 14))).rotate(-22.5).fillColor = "black";

  var stemOne = new Path.Line(new Point(x + 17, y + 6), new Point(x + 17, y - 40));
  var stemTwo = new Path.Line(new Point(x + 47, y + 6), new Point(x + 47, y - 40));

  var stemGroup = new Group(stemOne, stemTwo);
  stemGroup.style = {
    strokeColor: 'black',
    strokeWidth: 2
  };

  var beem = new Path.Line(new Point(x + 17, y - 38), new Point(x + 47, y - 38));
  beem.style = {
    strokeColor: "black",
    strokeWidth: 4
  };
}

function drawEightSingle(x, y) {
  var note = new Shape.Ellipse(new Rectangle(new Point(x ,y), new Size(18, 14))).rotate(-22.5).fillColor = "black";

  var stem = new Path.Line(new Point(x + 17, y + 6), new Point(x + 17, y - 40));
  stem.style = {
    strokeColor: 'black',
    strokeWidth: 2
  };

  var tail = new Path();
  tail.add(x+17, y-40);
  tail.curveTo(new Point(x+30, y-20), new Point(x+26, y));
  tail.style = {
    strokeColor: 'black',
    strokeWidth: 2
  };
}

function drawHalfNote(x, y) {
  var note = new Shape.Ellipse(new Rectangle(new Point(x, y+1), new Size(15, 10))).rotate(-22.5);
  note.style = {
    strokeColor: 'black',
    strokeWidth: 3
  };

  var stem = new Path.Line(new Point(x + 15, y + 6), new Point(x + 15, y - 40));
  stem.style = {
    strokeColor: "black",
    strokeWidth: 2
  };
}

function drawWholeNote(x, y) {}

for (var i = 0; i <= 11; i++) {
  drawMeasure(measureCount, measureIterator, lineCount);
}

function drawClef() {
  var clef = new Path();
  clef.importSVG("/svg/TrebleClef.svg");

  var symClef = new Symbol(clef);

  //clef.remove();

  var placedClef = new PlacedSymbol(symClef);
    var clefPoj = new Project();
  }

s = 40;
/*
drawQuarter(s, 212);
drawQuarter(s + 75, 212);
drawQuarter(s + 75*2, 212);
drawQuarter(s + 75*3, 212);

drawEighth(s+73.5*4, 212);
drawEighth(s+73.5*5, 212);
drawEighth(s+73.5*6, 212);
drawEighth(s+73.5*7, 212);

drawHalfNote(s+82*8, 212);
drawHalfNote(s+87*9, 212);
*/

drawClef();