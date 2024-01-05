import express from 'express'
import cors from 'cors'
import notesRoutes from './Routes/notesRoutes.js'
import authRoutes from './Routes/authRoutes.js'

const app = express();

//middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/notes',notesRoutes);
const port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("serving running on the port number number 8080");
});