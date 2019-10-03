module.exports = function multiply(first, second) {
  // your solution
  var string1 = first.split('').reverse();
  var string2 = second.split('').reverse(); 
  var mult = 0;
  var tempStack = [];
  var dozen = 0;

  for (var i = 0; i < string1.length; i++) {
    for (var j = 0; j < string2.length; j++) {
      mult += string1[i] * string2[j];
      if (!isNaN(tempStack[i + j])) {
        // tempStack[i + j + 1] =  Math.floor((tempStack[i+j] + mult) / 10);
        var temp = tempStack[i + j];
        tempStack[i + j] = (tempStack[i+j] + (dozen +mult)) % 10;
        dozen = Math.floor((temp + (dozen + mult)) / 10); 
        mult = 0;
      }
      else {
        tempStack.push((dozen + mult) % 10);
        dozen = Math.floor((dozen + mult) / 10);
        mult = 0;
      }
    }
    if (dozen > 0) {
      tempStack.push(dozen);
      dozen = 0;
    }
  }
  return tempStack.reverse().join('');
}
