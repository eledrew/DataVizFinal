let table;
//preload table data
function preload() {
  table = loadTable(
    'assets/nightlifePersonal.csv',
    'csv',
    'header')
  }

function setup() {
  createCanvas(1200, 1200);
  background(220);
  stroke(0,191,255);
  numberOfRows = table.getRowCount();
  numberOfColumns = table.getColumnCount();
  console.log(table);
  console.log("WHat");
  for (var r = 0; r<numberOfRows; r++){
    const x1 = table.getNum(r,"x1");
    const y1 = table.getNum(r,"y2");
    const x2 = table.getNum(r,"x2");
    const y2 = table.getNum(r,"y2");

    console.log(x1,y1,x2, y2);
    line(x1, y1, x2, y2);
  }
  /*
  console.log(table);
  for (let r=0; r < table.getRowCount(); r++) {
    const x1 = table.getNum(r,"x1");
    const y1 = table.getNum(r,"y2");
    const x2 = table.getNum(r,"x2");
    const y2 = table.getNum(r,"y2");
    line(x1, y1, x2, y2);
  }
  */
function draw() {
  fill(0);
  stroke(255);

  }


}
