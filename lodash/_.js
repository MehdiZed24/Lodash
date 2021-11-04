

const _ = {
  clamp(number, lower, upper) {
    let lowerClampedValue = Math.max(number, lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;

    //Ma METHODE:
    // if (number > upper) {
    //   return upper;
    // } else if (number < lower) {
    //   return lower;
    // } else {
    //   return number;
    // }
  },

  inRange(number, start, end) {
    let startCopy = start;
    let endCopy = end;
    if (start > end) {
      start = endCopy;
      end = startCopy;
    } else if (end === undefined) {
      start = 0;
      end = startCopy;
    }
    if (number >= start && number < end) {
      return true;
    } else {
      return false;
    }
  },

  words(string) {
    return string.split(" ");
  },

  pad(string, length) {
    let array = string.split("");
    //string = array.join('');

    let pad = " ";
    let extraPadding = length - string.length; //mot - nbre de lettre
    let dividedBy2 = extraPadding / 2; // si soustraction du dessus est pair la divise par 2 pour nous donner le nombre d'espace a mettre
    let spaceNeededPair = dividedBy2;
    let spaceNeededImpair = dividedBy2 - 1;
    if (string.length < length) {
      if (extraPadding % 2 === 0) {
        while (spaceNeededPair > 0) {
          array.push(pad);
          array.unshift(pad);
          spaceNeededPair--;
        }
      } else {
        array.push(pad);
        while (spaceNeededImpair > 0) {
          array.push(pad);
          array.unshift(pad);
          spaceNeededImpair--;
        }
      }
      return array.join("");
    } else {
      return string;
    }
  },
};

// Do not write or modify code below this line.
module.exports = _;
