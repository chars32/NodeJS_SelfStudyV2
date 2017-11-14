const utils = require('./utils');
// an older node module that helps to refactor assertions
const expect =require('expect');

describe('Utils', () => {
  it('should add two numbers', () => {
    let res = utils.add(11,33);
    const testValue = 44

    expect(res).toBe(44,`Expected ${testValue}, but received ${res}`).toBeA('number')
    // if (res !== testValue) {
    //   throw new Error(`Expected ${testValue}, but received ${res}`)
    // }
  });

  it('should square a number', () => {
    let value = 11
    let res = utils.square(value);
    let testValue = value**2

    expect(res).toBe(testValue).toBeA('number')
  })

  it('should set firstName and lastName', () => {
    let user = {location: 'Halifax, age: 26'};
    let res = utils.setName(user, 'Adrian Pearman');

    // expect(user).toEqual(res)
    expect(res).toInclude({
      firstName: 'Adrian',
      lastName: 'Pearman'
    })
  })
  // the done argument is used to let mocha know its an async function
  describe('ASYNC CALLS', () => {
    it('should async add two numbers', (done) => {
      utils.asyncAdd(3,12, (sum) => {
        expect(sum).toBe(15).toBeA('number');
        done();
      })
    })
    it ('should async square a number', (done) => {
      utils.asyncSquare(4, (sum) => {
        expect(sum).toBe(16).toBeA('number')
        done()
      })
    })
  })
})
