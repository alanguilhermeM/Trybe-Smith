// import sinon from 'sinon';
// import chai, { expect } from 'chai';
// import chaiHttp from 'chai-http';
// import app from '../../../src/app';
// import productsMock from '../../mocks/products.mock';
// import ProductModel from '../../../src/database/models/product.model';

// chai.use(chaiHttp);

// describe('GET /products', function () { 
//   beforeEach(function () { sinon.restore(); });
//   describe('#', function () {
//     it('deve retornar um status 200 com a lista de produtos', async function () {
//       // arrange

//       const httpRequestBody = productsMock.validProducts;
//       // const mockCreateReturn = ProductModel.build(productsMock.validProducts);
//       sinon.stub(ProductModel, 'findAll').resolves(httpRequestBody);
//       // Act
//       const httpResponse = await chai.request(app).get('/products');
//       // Assert
//       expect(httpResponse.status).to.equal(200);
//       expect(httpResponse.body).to.deep.equal(productsMock.validProducts);
//     });
//   });
// });
