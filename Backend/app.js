import express from 'express'
import { Router } from 'express'
import routerManager from './routes/routes_manager.js'
import dotenv from 'dotenv'
import cors from 'cors'
import path from 'path'


dotenv.config();

console.log(process.env.JWT_SECRET);

const PORT = process.env.PORT || 8080;
const FRONTEND_PATH = path.join(process.cwd(), "frontend");

const app = express()
const router = Router()
app.use(cors());

app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })


app.use("/api/v1", routerManager);
app.use(express.static(FRONTEND_PATH));
app.use((req, res) => {
  res.sendFile(path.join(FRONTEND_PATH, "index.html"));
});

app.listen(PORT , ()=> {
  console.log("App listening on port : " + PORT);
}) 