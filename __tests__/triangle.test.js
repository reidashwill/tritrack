import { Triangle } from './../src/triangle.js';

describe('Triangle', () => {

  test('should correctly create a triangle object with three lengths', () => {
    var triangle = new Triangle(2,4,5);
    expect(triangle.sideOne).toEqual(2);
    expect(triangle.sideTwo).toEqual(4);
    expect(triangle.sideThree).toEqual(5);
  });

  test('Should correctly determine whether three lengths are not a triangle', () => {
    var notTriangle = new Triangle(3, 9, 22);
    expect(notTriangle.checkType()).toEqual("not a triangle");
  });

  test("should correctly determine whether three lengths make a scalene triangle", () => {
    var scalTriangle = new Triangle(4, 5, 7);
    expect(scalTriangle.checkType()).toEqual("scalene triangle");
  });
  
  test('should correctly determine whether three lenths make and isosceles triangle', () => {
    var isocTriangle = new Triangle(5, 5, 7)
    expect(isocTriangle.checkType()).toEqual("isosceles triangle");
  });

  test('should correctly determine whether three lengths make an equalateral triangle', () => {
    var equalTriangle = new Triangle()
    expect(equalTriangle.checkType(5,5,5)).toEqual("equalateral triangle");
  });

    
});