import express from "express"
import routes from './route/index'

//or import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = 5000

app.use(express.json());       //middleware

app.use(routes)

app.get('/', (req,res) => {
    console.log(process.env.HOST)
    res.send("Hello, Backend world!") }      

)
app.listen(process.env.PORT, () => {
    console.log(`server running on http://localhost:${PORT}`)

})  