function Cell(i, j)
{
  this.i = i;
  this.j = j;
  this.walls = [true, true]
  this.visited = false;

  this.show = function(){
    var x = this.i * w;
    var y = this.j * w;
    stroke(0,255,0,200);
    strokeWeight(2);
    if(this.walls[0])
    line(x + w, y, x + w, y + w);
    if(this.walls[1])
    line(x + w, y + w, x, y + w);
  }

  this.index = function(i, j){
    if(i < 0 || i > col - 1 || j < 0 || j > row - 1)
      return -1;
    return i + j * col;
  }

  this.checkNeighbour = function(){
    var neighbour = []
    var top = grid[this.index(i, j - 1)];
    var right = grid[this.index(i + 1, j)];
    var bottom = grid[this.index(i, j + 1)];
    var left = grid[this.index(i - 1, j)];

    if(top && !top.visited)
    neighbour.push(top);
    if(right && !right.visited)
    neighbour.push(right);
    if(bottom && !bottom.visited)
    neighbour.push(bottom);
    if(left && !left.visited)
    neighbour.push(left);

    if(neighbour.length > 0){
      var r = floor(random(0, neighbour.length))
      return neighbour[r];
    }
    else {
      return undefined;
    }
  }
}
