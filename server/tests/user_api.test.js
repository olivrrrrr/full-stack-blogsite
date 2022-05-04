const supertest = require('supertest'); 
const User = require('../models/User'); 
const express = require('express'); 
const userRouter = require('../controllers/user'); 
const app = require('../app');

const api = supertest(app); 


describe("POST /users", ()=>{
    test("should respond with a status code 200", async ()=>{
        
    // const response = await api.post("/api/users/register").send({
    //     username: "username1",
    //     email: "username@snailmail.com",
    //     password : "password"
    // }); 

    // const response = await api.get("/api/users/all"); 
    // expect(response.statusCode).toBe(200);

      // expect(response.statusCode).toBe(200); 
    })

    test("should specify json in the content type header", async ()=>{
       const response = await api.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/)
    })
})

afterAll(async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 500)); 
});