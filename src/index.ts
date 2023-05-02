import express,{Request,Response} from 'express';
import UserRoute from './routes/user.route';

const app= express();
app.use(express.json());

app.get("/",(req:Request,res:Response)=>{
    res.send("shahid abbas test");
});

// Routes
app.use(`/user`,UserRoute);
const PORT = process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`App is running on PORT ${PORT}`);
});