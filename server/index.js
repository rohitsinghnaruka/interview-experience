import dotenv from 'dotenv';
dotenv.config();
const PORT = process.env.PORT;
const DB_URL = process.env.MONGO_URI;
import connectDB from './config/connectDB.js';
connectDB(DB_URL);
import express from 'express';
const app = express();
import cors from 'cors';
import userRouter from './routes/userRoute.js';
import errorMiddleware from './middleware/errorMiddleware.js';
import cookieParser from 'cookie-parser';
import blogRouter from './routes/blogRoute.js';
// import path from 'path';
import commentRouter from './routes/commentRoute.js';




// const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// app.use(cors({
//   origin: 'http://localhost:5173',   // ✅ must match frontend origin
//   credentials: true                 // ✅ allows cookies and auth headers
// }));
app.use(cors({
  origin: 'https://interview-experience-vnit.vercel.app',
  credentials: true,
}));

app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/comment', commentRouter);

// this commenting for backedtesting without react frontend
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// import path from 'path';


// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
// });

app.use(errorMiddleware);




app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
