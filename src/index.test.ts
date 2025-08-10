import request from 'supertest';
import app from './index'; // Assuming your app is exported from index.ts

describe('GET /', () => {
  it('should return "Hello World!" and status 200', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toEqual('Hello World!');
  });
});
