const app= require('./app');

var PORT= process.env.PORT || 3000;
app.listen(PORT,(req,res)=>{
    console.log(`Port started at ${PORT}`);
})