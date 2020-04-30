import {Client, expect} from '@loopback/testlab';
import {LoopbackApplication} from '../..';
import {setupApplication} from './test-helper';

// describe('PingController', () => {
//   let app: LoopbackApplication;
//   let client: Client;

//   before('setupApplication', async () => {
//     ({app, client} = await setupApplication());
//   });

describe('RolesControllerController', () => {
  let app: LoopbackApplication;
  let client: Client;

  before('setupApplication', async () => {
    ({app, client} = await setupApplication());
  });

  after(async () => {
    await app.stop();
  });

  it('invokes GET /roles', async () => {
    const res = await client
      .get('/roles')
      .expect(200);
    console.log(res.body)
  });

  it('invokes post roles with empty data', async () => {
    const reqData = {}
    const res = await client
      .post('/roles')
      .send(reqData)
      .expect(422)

    expect(res).to.have.property('error')
  })

  it('invokes post roles with wrong or incorrect data', async () => {
    const reqData = {
      roleNme: 'ddfer'
    }
    const res = await client
      .post('/roles')
      .send(reqData)
      .expect(422)

    expect(res).to.have.property('error')
  })

  it('invokes post roles with correct data', async () => {
    const reqData = {
      roleName: 'ADMIN'
    }
    const res = await client
      .post('/roles')
      .send(reqData)
      .expect(200)
  })
});
