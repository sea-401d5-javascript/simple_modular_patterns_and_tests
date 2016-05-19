exports = module.exports = {};

exports.type = 'Greeting';

exports.greet = function(name) {
  console.log ('hello ' + name);
  return ('hello ' + name);
};
