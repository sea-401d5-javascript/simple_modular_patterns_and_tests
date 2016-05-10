const chai = require('chai');
const expect = chai.expect;
const manuplayer = require('../manuplayer');

describe('Testing for greet', () => {
  it('is a player', () => {
    expect(manuplayer.type).to.eql('Player');
  })
  it('greets correctly', () => {
    var greetedName = 'greetedName';
    expect(manuplayer.greet(greetedName)).to.eql('Hello' + greetedName );
  })
})
