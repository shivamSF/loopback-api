import {Client, expect} from '@loopback/testlab';
import {LoopbackApplication} from '../..';
import {setupApplication} from './test-helper';

// describe('PingController', () => {
//   let app: LoopbackApplication;
//   let client: Client;

//   before('setupApplication', async () => {
//     ({app, client} = await setupApplication());
//   });

describe('CustomersControllerController', () => {
  let app: LoopbackApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes Post Customers with empty data', async () => {
    const reqData = {
      name: 'Shivam',
      customerAddress: 'bangalore',
      website: 'shivam.com'
    }
    const res = await client
      .post('/customers')
      .send(reqData)
      .expect(200)
  });

  it('invokes Post Customers with correct data', async () => {
    const reqData = {
    }
    const res = await client
      .post('/customers')
      .send(reqData)
      .expect(422)

    expect(res).to.have.property('error')
  });

  it('invokes Post Customers with wrong or incomplete data', async () => {
    const reqData = {
      name: 'Shivam',
      customersAddress: 'bangalore',
    }
    const res = await client
      .post('/customers')
      .send(reqData)
      .expect(422)

    expect(res).to.have.property('error')
  });

  it('invokes get customers', async () => {
    const res = await client
      .get('/customers')
      .expect(200)
  })

});
