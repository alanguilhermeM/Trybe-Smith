import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('POST /products', function () { 
  beforeEach(function () { sinon.restore(); });
  describe('quando a requisição é feita com dados válidos', function () {
    it('deve retornar um status 201 com um produto criada', async function () {
      // arrange

      const httpRequestBody = productsMock.validProduct;
      const mockCreateReturn = ProductModel.build(productsMock.validProduct);
      sinon.stub(ProductModel, 'create').resolves(mockCreateReturn);
      // Act
      const httpResponse = await chai.request(app).post('/products').send(httpRequestBody);
      // Assert
      expect(httpResponse.status).to.equal(201);
      expect(httpResponse.body).to.deep.equal(productsMock.validProduct);
    });
  });
});
