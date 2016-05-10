const chai = require ('chai');
const expect = chai.expect;
const hello = require('../salutations/hello');

describe ('Greeting Object', () => {
  it('Type of object is greeting', () => {
    expect(hello.type).to.eql('Greeting');
})
  it('should greet a person with hello and their name', () => {
    expect(hello.greet('Victor')).to.eql('hello Victor')
  })
})
