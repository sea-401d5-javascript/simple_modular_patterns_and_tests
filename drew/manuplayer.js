// exports = module.exports = {};
//
// exports.type = 'Player';
//
// exports.greet = function (name) {
//   return 'Hello' + name;
// };

'use strict';

const greet = module.exports = function() {


  return `HI ${process.argv[2] || 'Dave'}`;
};

console.log(greet());
