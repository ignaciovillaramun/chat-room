const express = require('express');
const request = require('supertest');
const routes = require ('../routes')
const app = new express()
app.use('/', routes)

const baseurl = 'https://chat-room-f53d.onrender.com'

describe('Post tests', () => {
    let mockPost;
    let testPostId;

    it('should get all posts', async () => {
        res = await request(baseurl).get('/posts/all');
        expect(res.statusCode).toBe(200)
    })

    it('should insert a post', async () => {
        mockPost = {googleUser: "6554118119fa9b2aa53a5cc8", message: "This is a test post through Jest."};
        res = await request(baseurl).post('/posts/create').send(mockPost);
        expect(res.statusCode).toBe(201);
        testPostId = res.body.data.data._id;
    });

    it('should get a post by id', async () => {
        res = await request(baseurl).get('/posts/' + testPostId);
        expect(res.body.message).toEqual(mockPost.message)
    });

    it('should update a post', async () => {
        let updatedMockPost = {message: "This is an edited test post through Jest."}
        res = await request(baseurl).put('/posts/' + testPostId).send(updatedMockPost);
        expect(res.statusCode).toBe(204)
        let res2 = await request(baseurl).get('/posts/' + testPostId)
        expect(res2.body.message).toEqual(updatedMockPost.message)
    })

    it('should delete a post', async () => {
        let res = await request(baseurl).delete('/posts/' + testPostId);
        expect(res.statusCode).toBe(200)
    });
});
