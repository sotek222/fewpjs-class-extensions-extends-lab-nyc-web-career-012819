class Polygon {
  constructor(sides) {
    this.sides = sides;
  }

  get getCount(){
    let count = this.sides.length;
    return count;
  }

  get perimeter(){
    return this.sides.reduce((acc, curr) => acc + curr);
  }
}

class Triangle extends Polygon {

  get isValid(){
    if((this.sides[0] + this.sides[1]) > this.sides[2] && (this.sides[1] + this.sides[2]) > this.sides[0] && (this.sides[2] + this.sides[0]) > this.sides[1]) {
      return true;
    } else {
      return false;
    }
  }
}

class Square extends Polygon {

  get isValid(){
    if(this.sides[0] === this.sides[2] && this.sides[1] === this.sides[3] && this.sides[0] === this.sides[1]){
      return true;
    } else {
      return false;
    }
  }

  get area(){
    return this.sides[0] * this.sides[1];
  }
}
