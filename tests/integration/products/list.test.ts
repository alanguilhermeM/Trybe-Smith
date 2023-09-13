import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import productsMock from '../../mocks/products.mock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

describe('GET /products', function () { 
  beforeEach(function () { sinon.restore(); });
  describe('#', function () {
    it('Retorna status 200 e um array com os produtos.', async function () {
      const mockCreateReturn = ProductModel.build({
        "id": 1,
        "name": "Excalibur",
        "price": 10,
        "orderId": 1
      });    
      sinon.stub(ProductModel, 'findAll').resolves([mockCreateReturn]);
      const response = await chai.request(app).get('/products');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal([mockCreateReturn.toJSON()]);
    }); 
  });
});
