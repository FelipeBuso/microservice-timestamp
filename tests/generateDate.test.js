const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../src/api/app');
chai.use(chaiHttp);
const { expect } = chai;

describe('GET api/:date', () => {
  describe('quando fazemos requisição sem data', () => {
    let response = {};
    before(async () => {
      response = await chai.request(server)
        .get('/api/')
    });

    it('retorna um objeto com as keys "unix", "utc" e status 200', () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.all.keys('unix', 'utc');
      expect(response).to.be.status(200);
    });
  });

  describe('Quando fazemos uma requisiçaõ passando uma data em timestamp', () => {
    let timestamp = 1451001600000;
    let response = {};
    
    before(async () => {
      response = await chai.request(server)
        .get(`/api/${timestamp}`)
    });

    it('retorna um objeto com as keys "unix", "utc" e status 200', () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.all.keys('unix', 'utc');
      expect(response).to.be.status(200);
    });
  });

  describe('Quando fazemos uma requisiçaõ passando uma data "YYYY-MM-DD"', () => {
    let data = "2012-12-12";
    let response = {};
    
    before(async () => {
      response = await chai.request(server)
        .get(`/api/${data}`)
    });

    it('retorna um objeto com as keys "unix", "utc" e status 200', () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.all.keys('unix', 'utc');
      expect(response).to.be.status(200);
    });
  });

  describe('Quando fazemos uma requisição com dados inválidos', () => {
    let invalido = "abc";
    let response = {};
    
    before(async () => {
      response = await chai.request(server)
        .get(`/api/${invalido}`)
    });

    it('retorna um objeto com a keys "error", status 400', () => {
      expect(response.body).to.be.an('object');
      expect(response.body).to.have.key('error');
      expect(response).to.be.status(400);
    });
  });
});