
export function Triangle(sideOne, sideTwo, sideThree) {
this.sideOne =sideOne
this.sideTwo = sideTwo
this.sideThree = sideThree
}

Triangle.prototype.checkType = function () {
  if (this.sideOne > this.sideTwo + this.sideThree || this.sideTwo > this.sideOne + this.sideThree || this.sideThree > this.sideOne + this.sideTwo) {
    return "not a triangle"
  } else if (this.sideOne !== this.sideTwo && this.sideOne !== this.sideThree && this.sideTwo !== this.sideThree){
    return "scalene triangle";
  } else if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
    return "equalateral triangle";
  } else if (this.sideOne === this.sideTwo || this.sideOne === this.sideThree || this.sideTwo === this.sideThree) {
    return "isosceles triangle"; 
  }
};



// Triangle.prototype.checkType = function() {
//   if ((this.sideOne > (this.sideTwo + this.sideThree)) || (this.sideTwo > (this.sideOne + this.sideThree)) || (this.sideThree > (this.sideOne + this.sideTwo))) {
//     return "not a triangle";
//   } else if ((this.sideOne !== this.sideTwo) && (this.sideOne !== this.sideThree) && (this.sideTwo !== this.sideThree)) {
//     return "scalene triangle";
//   }
// };