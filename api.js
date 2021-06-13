let db=require('./operations')
let Kiado=require('./kiado')
const operations = require('./operations')

let express=require('express')
let cors=require('cors')
let app=express()
let port=8080
app.listen(port,()=>{
  console.log('Server is running at '+port)
})
app.get('/',(request,response)=>{
  response.send('Welcome to the API')
})

/*let router=express.Router();

operations.getKiado().then(result=>{
  console.log(result)
})*/

let bodyParser=require('body-parser')

/*
app.use(cors);
app.use('/api',router);

router.use((req,res,next)=>{
  console.log('midleware')
  next()
})
router.route('./kiado').get((request,response)=>{
  operations.getKiado().then(result=>{
  //console.log(result)
  result.json(result[0])
})
})

let port=process.env.port || 8090;
app.listen(port)
console.log('Kiado API is running at '+port)
*/