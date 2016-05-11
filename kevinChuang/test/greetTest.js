/*eslint-env es6*/

const chai = require('chai');
const expect = chai.expect;
const greet = require('../greet');

describe('greeting test', ()=>{
  it('should greet the name that is input',()=>{
    var name;
    expect(greet.greetings('Kevin')).to.eql('Hello Kevin');
  });
});

describe('command line greeting', ()=> {
  it('should greet the name of argument passed in the command line', ()=> {
    process.argv = ['node','greet.js','Kevin'];
    expect(greet.greetings(process.argv[2])).to.eql('Hello Kevin');
  });
});
