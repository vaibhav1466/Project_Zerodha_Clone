require('dotenv').config(); 
const express = require('express');

const app = express();
app.listen(3002,()=>{
    console.log("Server is running on port 3002");
});