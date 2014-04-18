window.onload = function () {
  var paper = Snap("#svg");

  var line = 1, measure = 1, measureCount = 0;

  function startStave() {
    Snap.load("/svg/TrebleClef.svg", function(image){
      var obj = image.select("#clef");
      var t = new Snap.Matrix();
      t.translate(200, -20);
      t.scale(0.35);
      obj.transform(t);

      paper.append(obj);
    });

    var x = 200, y = 148.75, factor = 16.25;

    var outline = paper.rect(x, 100, 300, 65);
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
      y = 148.75 + (100 * line);
      lineY = 100 + (100 * line);
      x = 20 + (300 * (measureCount + 1));
    } else {
      y = 148.75;
      lineY = 100;
      x = 200 + (300 * measureCount);
    }

    var outline = paper.rect(x, lineY, 300, 65);
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
    console.log("End Stave");
  }

  function newLineStave() {
    var x = 20, y = 148.75 + (100 * line), factor = 16.25;

    Snap.load("/svg/TrebleClef.svg", function(image){
      var obj = image.select("#clef");
      var t = new Snap.Matrix();
      t.translate(20, -20 + (100 * line));
      t.scale(0.35);
      obj.transform(t);

      paper.append(obj);
    });

    var outline = paper.rect(x, 100 +(100 * line), 300, 65);
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


  startStave();
  addMeasure();
  addMeasure();
  addMeasure();
  addMeasure();
  console.log(measureCount);
  addMeasure();
  addMeasure();
};