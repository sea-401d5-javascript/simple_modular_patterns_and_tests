'use strict';

const chai = require('chai');
const expect = chai.expect;
const greet = require('../manuplayer');

// describe('Testing for greet', () => {
//   it('is a player', () => {
//     expect(manuplayer.type).to.eql('Player');
//   })
//   it('greets correctly', () => {
//     var greetedName = 'greetedName';
//     expect(manuplayer.greet(greetedName)).to.eql('Hello' + greetedName );
//   })
// })

describe('greet tests', () => {
  it('should greet Dave by default', () => {
    expect(greet()).to.eql('HI Dave');
  })
  it('should greet from process', () => {
    let backupProcess = process.argv;
    process.argv = ['node', 'test_path', 'test'];
    expect(greet()).to.eql('HI test');
    process.argv = backupProcess;
  })
})
