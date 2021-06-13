import express from 'express'
import router from './router.js'

const app=express()
const port=8080

app.use(express.json())
app.use('/kiadok',router)
//create route for application:
app.get('/',(req,res)=>{
    res.send('Welcome to the API')
})

//run the server:
app.listen(port,()=>{
    console.log(`Server running on port: ${port}`)
})