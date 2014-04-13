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
  yAxisShift = 200 * (lineCount - 1);
  xAxisShift = 300 * measureIterator;

  var staveOuter = new Path.Rectangle(new Point(20 + xAxisShift, 150 + yAxisShift), new Point(320 + xAxisShift, 250 + yAxisShift)).strokeColor = "#000";
  var ledgerOneStart = new Point(20 + xAxisShift, 250 + yAxisShift),
        ledgerOneEnd  = new Point(320 + xAxisShift, 250 + yAxisShift);
  var ledgerOne = new Path.Line(ledgerOneStart, ledgerOneEnd);
  var ledgerTwo = new Path.Line(ledgerOneStart + [0, -25], ledgerOneEnd + [0, -25]).strokeColor = "#000";
  var ledgerThree = new Path.Line(ledgerOneStart + [0, -50], ledgerOneEnd + [0, -50]).strokeColor = "#000";
  var ledgerFour = new Path.Line(ledgerOneStart + [0, -75], ledgerOneEnd + [0, -75]).strokeColor = "#000";

  iterateMeasureCount();
  measureTracker();
}

function drawQuarter(x, y) {
  var note = new Path.Ellipse(new Rectangle(new Point(x, y), new Size(18, 14))).rotate(-22.5).fillColor = "black";

  var stem = new Path.Line(new Point(x + 16, y + 8), new Point(x + 16, y - 40));
  stem.style = {
    strokeColor: "black",
    strokeWidth: 3
  };
}

function drawEighth(x,y) {
  var eighthOne = new Path.Ellipse(new Rectangle(new Point(x ,y), new Size(12, 9))).rotate(-22.5).fillColor = "black";
  var eighthTwo = new Path.Ellipse(new Rectangle(new Point(x + 20, y), new Size (12, 9))).rotate(-22.5).fillColor = "black";

  var stemOne = new Path.Line(new Point(x + 11, y + 2), new Point(x + 11, y - 30)).strokeColor = "#000";
  var stemTwo = new Path.Line(new Point(x + 31, y + 2), new Point(x + 31, y - 30)).strokeColor = "#000";

  var beem = new Path.Line(new Point(x + 11, y - 28), new Point(x + 31, y - 28));
  beem.style = {
    strokeColor: "black",
    strokeWidth: 3
  };
}

function drawEightSingle(x, y) {
  var note = new Path.Ellipse(new Rectangle(new Point(x ,y), new Size(12, 9))).rotate(-22.5).fillColor = "black";

  var stem = new Path.Line(new Point(x + 11, y + 2), new Point(x + 11, y - 30)).strokeColor = "#000";

  var tail = new Path();
  tail.add(x+11, y-30);
  tail.curveTo(new Point(x+20, y-10), new Point(x+15, y));
  tail.strokeColor= "#000";
  //tail.fillColor = "#000";
}

for (var i = 0; i <= 13; i++) {
  drawMeasure(measureCount, measureIterator, lineCount);
}

drawQuarter(40, 242);