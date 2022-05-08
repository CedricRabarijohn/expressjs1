const express = require('express')
const serverless = require('serverless-http')
const app = express()

const router = express.Router()
router.get('/',(req,res)=>{
    res.json({
        'hello':'hi'
    })
})
router.get('/test',(req,res)=>{
    res.json({
        'Test':'This is a test'
    })
})
router.get('/test2',(req,res)=>{
    res.json({
        'Test':'This is an another test'
    })
})
app.use('/.netlify/functions/api',router)
module.exports.handler = serverless(app)