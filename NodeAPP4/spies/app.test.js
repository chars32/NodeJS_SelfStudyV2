const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app') // this will load

describe('App', () => {
  let db = {
    saveUser: expect.createSpy()
  };
  app.__set__('db', db
)
  it('should call the spy correctly', () => {
    let spy = expect.createSpy();
    spy();
    expect(spy).toHaveBeenCalled()
  })

  it('should call saveUSer with user object', () => {
    let email = 'email@gmail.com';
    let password = 'qwerty';

    app.handleSignup(email, password);
    expect(db.saveUser).toHaveBeenCalledWith({
      email: email,
      password: password
    })
  })
})
