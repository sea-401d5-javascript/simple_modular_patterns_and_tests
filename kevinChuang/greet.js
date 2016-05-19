(function() {
  exports = module.exports = {};

  exports.greetings = function(name) {
    return 'Hello ' + name;
  };

  if (!module.parent) {
    console.log(exports.greetings(process.argv[2]));
  }
})();
