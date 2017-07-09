// First object
var abc = {
  a : 'a1',
  b : 'b2',
  c : 'c3'
};

// Second object, prototype of First obejct
var xyz = Object.create(abc);
xyz.d = 'd4';

// function to check if an object (Second object) contains given property
function checkGivenProperty() {
  for (var x in xyz) {
    if (xyz.hasOwnProperty.call(xyz, x)) {
      alert('\t[true]\n\n' + x + ' is a given property of Second Object.');
    } else {
      alert('\t[false]\n\n' + x + ' is NOT a given property of Second Object.');
    }
  }
}
checkGivenProperty();
