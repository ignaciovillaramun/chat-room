const express = require('express');
const request = require('supertest');
const routes = require('../routes');
const app = new express();
app.use('/', routes);

const baseurl = 'http://localhost:8080';

describe('User tests', () => {
  // Create a new user through google to try delete test and replace the testUserId
  let testUserId = '656bcf39670f70d95e0494cd';

  it('should get all users', async () => {
    res = await request(baseurl).get('/users/all');
    expect(res.statusCode).toBe(200);
  });

  it('should get a User by id', async () => {
    res = await request(baseurl).get(`/users/${testUserId}`);
    expect(res.body._id).toEqual(testUserId);
  });

  it('should update a User', async () => {
    let updatedMockUser = {
      lastName: 'Villar Amun',
    };
    res = await request(baseurl)
      .put(`/users/${testUserId}`)
      .send(updatedMockUser);
    expect(res.statusCode).toBe(204);
    let res2 = await request(baseurl).get(`/users/${testUserId}`);
    expect(res2.body.message).toEqual(updatedMockUser.message);
  });

  // Try this by creating a new google user first
  // it('should delete a User', async () => {
  //   let res = await request(baseurl).delete(`/users/${testUserId}`);
  //   expect(res.statusCode).toBe(200);
  // });
});
