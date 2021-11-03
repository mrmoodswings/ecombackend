const app = require('./src/app').app;

const PORT = process.env.PORT||4000;

app.listen(PORT,()=>{
    console.log(`listening to port ${PORT}...`)
})