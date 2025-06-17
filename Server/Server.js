const express =require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileRoutes = require('./Routes/Fileroutes');
const app = express();

const port = 4000;
app.use(cors(
    {
        origin:"*",
        methtods:"*"
    }
));
mongoose.connect("mongodb+srv://maizaaymena:maizaaymena123@cluster0.fa8mu.mongodb.net/mintyos" , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});
app.use('/api/files',fileRoutes);
app.get('/',(req,res)=>{
    res.send("hello i am aymen");
})
     app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
     });