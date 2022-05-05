const supertest = require('supertest'); 
const User = require('../models/User'); 
const express = require('express'); 
const userRouter = require('../controllers/user'); 
const app = require('../app');
const { default: mongoose } = require('mongoose');
const api = supertest(app); 

describe("POST /users", ()=>{
  
  beforeAll(async ()=>{
          await User.remove({}); 
        })

  afterEach(async ()=>{
          await User.remove({}); 
        })

  afterAll(async ()=>{
      await mongoose.connection.close(); 
    })    

    test("should respond with a status code 200", async ()=>{

  
    const response = await api.post("/api/users/register").send({
        username: "username1",
        email: "username@snailmail.com",
        password : "password"
    }); 

      expect(response.statusCode).toBe(200); 
    })
})

describe("GET /users", ()=>{
  test("should specify json in the content type header", async () =>{ 
     const response = await api.get('/api/users').expect(200).expect('Content-Type', /application\/json/)
  })

   test("should specify json in the content type header", async () =>{ 
     const response = await api.get('/api/users').expect(200).expect('Content-Type', /application\/json/)
  })
})

afterAll(async () => {
	await new Promise(resolve => setTimeout(() => resolve(), 500)); 
});