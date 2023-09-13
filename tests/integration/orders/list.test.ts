import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../src/app';
import ordersMock from '../../mocks/orders.mock';
import OrdersModel from '../../../src/database/models/order.model';

chai.use(chaiHttp);

describe('GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  describe('#', function () {
    it('Retorna status 200 e um array com os produtos cadastrados.', async function () {
      const mockCreateReturn = OrdersModel.build(ordersMock.validOrders[0]);    
      sinon.stub(OrdersModel, 'findAll').resolves([mockCreateReturn]);
      const response = await chai.request(app).get('/orders');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.be.deep.equal([mockCreateReturn.toJSON()]);
    }); 
  });
});
