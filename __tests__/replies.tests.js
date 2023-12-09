const express = require('express');
const request = require('supertest');
const routes = require('../routes');
const app = new express();
app.use('/', routes);

const baseurl = 'http://localhost:8080';

describe('Reply tests', () => {
  let mockReply;
  let testReplyId;

  it('should get all replies', async () => {
    res = await request(baseurl).get('/replies/all');
    expect(res.statusCode).toBe(200);
  });

  it('should insert a reply', async () => {
    mockReply = {
      googleUser: '6554118119fa9b2aa53a5cc8',
      postId: '6552cb1f4758f8d664c6d1a2',
      message: 'This is a test reply through Jest.',
    };
    res = await request(baseurl).post('/replies/create').send(mockReply);
    expect(res.statusCode).toBe(201);
    testReplyId = res.body.data._id;
  });

  it('should get a reply by id', async () => {
    res = await request(baseurl).get(`/replies/${testReplyId}`);
    expect(res.body.message).toEqual(mockReply.message);
  });

  it('should update a reply', async () => {
    let updatedMockReply = {
      message: 'This is an edited test reply through Jest.',
    };
    res = await request(baseurl)
      .put(`/replies/${testReplyId}`)
      .send(updatedMockReply);
    expect(res.statusCode).toBe(204);
    let res2 = await request(baseurl).get(`/replies/${testReplyId}`);
    expect(res2.body.message).toEqual(updatedMockReply.message);
  });

  it('should delete a reply', async () => {
    let res = await request(baseurl)
      .delete(`/replies/${testReplyId}`)
      .redirects(5);
    expect(res.statusCode).toBe(200);
  });
});
