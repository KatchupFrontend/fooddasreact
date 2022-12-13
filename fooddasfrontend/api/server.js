const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
const app=express()
const userRoute=require('./routes/userRoutes')
app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then((result) => {
        app.listen(
            process.env.PORT,
            console.log(`server listening on http://localhost:${process.env.PORT}`)
        );
    })
    .catch((err) => console.log(err.message));
app.use('/api',userRoute)

