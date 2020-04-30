import {Client, expect} from '@loopback/testlab';
import {LoopbackApplication} from '../..';
import {setupApplication} from './test-helper';

// describe('PingController', () => {
//   let app: LoopbackApplication;
//   let client: Client;

//   before('setupApplication', async () => {
//     ({app, client} = await setupApplication());
//   });

describe('UsersControllerController', () => {
  let app: LoopbackApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes get users', async () => {
    const res = await client
      .get('/users')
      .expect(200)
  })

  it('invokes post users with empty data', async () => {
    const reqData = {}
    const res = await client
      .post('/users')
      .send(reqData)
      .expect(422)

    expect(res).to.have.property('error');
  })

  it('invokes post users with correct data', async () => {
    const reqData = {
      firstName: 'shivam',
      middleName: ' ',
      lastName: 'chouhan',
      email: 'shi@dh.com',
      phone: '1234567890',
      address: 'ewfwrg',
      customersId: 1,
      rolesId: 1
    }
    const res = await client
      .post('/users')
      .send(reqData)
      .expect(200)
  })

  it('invokes post users with incorrect data', async () => {
    const reqData = {
      firstName: 'shiv3am',
      middleName: ' ',
      lastName: 'cho3uhan',
      email: 'shi@dh.com',
      phone: '1234567890',
      address: 'ewfwrg',
      customersId: 1,
      rolesId: 1
    }
    const res = await client
      .post('/users')
      .send(reqData)
      .expect(422)
  })

});
