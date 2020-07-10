var row, col;
var w = 20;
var grid = [];
var current;

function setup() {
  createCanvas(720, 720);
  col = floor(width/w);
  row = floor(height/w);
  for(var j = 0; j < row; j++){
    for(var i = 0; i < col; i++)
      grid.push(new Cell(i, j));
  }
  current = grid[0];
}
var stack = [];

function draw() {
  background(0, 26, 77);
  current.visited = true;
  for(var j = 0; j < grid.length; j++)
  grid[j].show();

  var next = current.checkNeighbour();
  if(next){
    next.visited = true;
    stack.push(current)
    removeWalls(current, next);
    current = next;
  }
  else if(stack.length > 0){
    current = stack.pop();
  }

  fill(255, 255, 0);
  square(current.i * w, current.j * w, w);
}

function removeWalls(a, b)
{
  var x = a.i - b.i;
  if(x === 1){
    b.walls[0] = false;
    return;
  }
  else if(x === -1){
    a.walls[0] = false;
    return;
  }
  var y = a.j - b.j;
  if(y === 1)
    b.walls[1] = false;
  else if (y === -1)
    a.walls[1] = false;
}
