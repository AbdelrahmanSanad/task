const { json } = require('body-parser');
const express=require('express');
const app=express();
const testRoutes= require('./Routes/testRoutes');
const cors=require('cors');
app.use(cors());
app.use('/tests',testRoutes)





module.exports=app