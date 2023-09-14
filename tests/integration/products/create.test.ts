import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  // describe('quando a requisição é feita com dados válidos', function () {
  //   it('deve retornar um status 201 com um produto criada', async function () {
  //     // arrange

  //     const httpRequestBody = productsMock.validProduct;
  //     const mockCreateReturn = ProductModel.build(productsMock.validProduct);
  //     sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);
  //     // Act
  //     const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
  //     // Assert
  //     expect(httpResponse.status).to.equal(201);
  //     expect(httpResponse.body).to.deep.equal(productsMock.validProduct);
  //   });
  // });

  describe('quando a requisição é feita com dados invalidos', function () {
    it('Se o campo "name" não for informado, o resultado retornado deverá ser um status http 400', async function () {
      // arrange

      const httpRequestBody = productsMock.noName;
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({ message: '"name" is required' });
    });

    it('Se o campo "name" não for do tipo string, o resultado retornado deverá ser um status http 422', async function () {
      // arrange

      const httpRequestBody = productsMock.numberName;
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.deep.equal({ message: '"name" must be a string' });
    });

    it('Se o campo "name" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422', async function () {
      // arrange

      const httpRequestBody = productsMock.emptyName;
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.deep.equal({ message: '"name" length must be at least 3 characters long' });
    });
  });

  describe('quando a requisição é feita com dados invalidos', function () {
    it('Se o campo "price" não for informado, o resultado retornado deverá ser um status http 400', async function () {
      // arrange

      const httpRequestBody = productsMock.noPrice;
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(400);
      expect(httpResponse.body).to.deep.equal({ message: '"price" is required' });
    });

    it('Se o campo "price" não for do tipo string, o resultado retornado deverá ser um status http 422', async function () {
      // arrange

      const httpRequestBody = productsMock.numberPrice;
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.deep.equal({ message: '"price" must be a string' });
    });

    it('Se o campo "price" não for uma string com mais de 2 caracteres, o resultado retornado deverá ser um status http 422', async function () {
      // arrange

      const httpRequestBody = productsMock.emptyPrice;
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(422);
      expect(httpResponse.body).to.deep.equal({ message: '"price" length must be at least 3 characters long' });
    });
  });
});
