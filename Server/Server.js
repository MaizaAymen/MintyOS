const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

const port = 4000;
app.use(cors(
    {
        origin:"*",
        methtods:"*"
    }
));

app.get('/',(req,res)=>{
    res.send("hello i am aymen");
})
     app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
     });