import express from 'express'
import { Router } from 'express'
import routerManager from './routes/routes_manager.js'
import dotenv from 'dotenv'
import cors from 'cors'


dotenv.config();

console.log(process.env.JWT_SECRET);


const PORT = 3000;

const app = express()
const router = Router()
app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use("/api/v1", routerManager);

app.listen(PORT , ()=> {
  console.log("App listening on port : " + PORT);
}) 