function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

module.exports = {
  addFn: add,
  subFn: sub,
};

/*module.exports = {
  add,
  sub,
};

will give an anonymous function
exports.add = (a,b) => a+b;
exports.sub = (a,b) => a-b;

*/
