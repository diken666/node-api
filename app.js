const express = require('express');
const app = express();


app.get('/', (req,res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json({
       name: 'tom',
       age: 12
   })
});
app.listen(3000,()=>{
   console.log('listen 3000')
});