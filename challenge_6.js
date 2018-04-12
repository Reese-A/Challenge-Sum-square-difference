/*  SumOfASquare(naturalNumbers)
 *
 *  @param naturalNumbers        1...naturalNumbers to square and add
 *  @method sumOfSquares()       returns ths sum of all 'naturalNumbers' squared
 *  @method squareOfTheSums()    returns the square of all 'naturalNumbers'
 */


class SumOfASquare {
  constructor(naturalNumbers) {
    this.naturalNumbers = naturalNumbers;
  }
  sumOfSquares() {
    let sum = 0;
    for (let i = 1; i <= this.naturalNumbers; i++) {
      sum += (Math.pow(i, 2));
    }
    return sum;
  }
  squareOfTheSums() {
    let sum = 0;
    for (let i = 1; i <= this.naturalNumbers; i++) {
      sum += i;
    }
    return Math.pow(sum, 2);
  }
}

exports.SumOfASquare = SumOfASquare;
// do work here


// function sumOfSquares(naturalNumbers) {
//   let sum = 0;
//   for (i = 1; i <= naturalNumbers; i++) {
//     sum += (Math.pow(i, 2));
//   }
//   return sum;
// }
// console.log(sumOfSquares(100))

// function squareOfTheSums(naturalNumbers) {
//   let sum = 0;
//   for (i = 1; i <= naturalNumbers; i++) {
//     sum += i;
//   }
//   return Math.pow(sum, 2);
// }
// console.log(squareOfTheSums(100))

// overwrite the object prototype, or add methods to the prototype
// to satisfy the two method calls, sumOfSquares() and squareOfTheSums()