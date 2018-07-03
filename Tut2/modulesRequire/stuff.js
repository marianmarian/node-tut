var counter = function(arr) {
  return  "Sunt " + arr.length + " elemente in array.";
};

var adder = function(a, b) {
  return `Suma dintre ${a} si ${b} este ${a + b}.`;
}

var pi = 3.142;

//module.exports.counter = counter;

module.exports = {
  counter: counter,
  adder: adder,
  pi: pi
}
