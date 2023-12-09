const express = require('express');
const request = require('supertest');
const routes = require('../routes');
const app = new express();
app.use('/', routes);

const baseurl = 'http://localhost:8080';

describe('like tests', () => {
  let mockLike;
  let testLikeId;

  it('should get all likes', async () => {
    res = await request(baseurl).get('/likes/all');
    expect(res.statusCode).toBe(200);
  });

  it('should insert a like', async () => {
    mockLike = {
      googleUser: '6554118119fa9b2aa53a5cc8',
      postId: '6552cb1f4758f8d664c6d1a2',
      emoji: 'This is a test like through Jest.',
    };
    res = await request(baseurl).post('/likes/create').send(mockLike);
    expect(res.statusCode).toBe(201);
    testLikeId = res.body.data.data._id;
  });

  it('should get a like by id', async () => {
    res = await request(baseurl).get(`/likes/${testLikeId}`);
    expect(res.body.emoji).toEqual(mockLike.emoji);
  });

  it('should update a like', async () => {
    let updatedMockLike = {
      emoji: 'This is an edited test like through Jest.',
    };
    res = await request(baseurl)
      .put(`/likes/${testLikeId}`)
      .send(updatedMockLike);
    expect(res.statusCode).toBe(204);
    let res2 = await request(baseurl).get(`/likes/${testLikeId}`);
    expect(res2.body.emoji).toEqual(updatedMockLike.emoji);
  });

  it('should delete a like', async () => {
    let res = await request(baseurl).delete(`/likes/${testLikeId}`);
    expect(res.statusCode).toBe(200);
  });
});
