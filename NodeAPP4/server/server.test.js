const request = require('supertest');
let expect = require('expect')
let app = require('./server').app

describe('Server', () => {
  describe('Root', ()=> {
    it('should return hello world', (done) => {
      request(app)
        .get('/')
        .expect('hello world')
        .expect(200)
        .end(done);
    })
  })
  describe('Users', ()=> {
    it('should return an array of objects', (done) => {
      request(app)
        .get('/users')
        .expect(200)
        .expect((res) => {
          expect(res.body).toInclude({
            name: 'Adrian',
            age: 26
          })
        })
        .end(done)
    })
  })
})
