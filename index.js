const express = require('express')
const app = express();

app.use(express.static('./docs'));
app.listen(3000,()=>{
    console.log("listening on port 3000")
});
app.get("/read",(req,res)=>{
    res.status(200).send({
        status:200,
        message:"welcome to story tym"
    })
});