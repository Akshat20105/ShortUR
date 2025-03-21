import exprss from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import shortUrl from './routes/shortUrl';
import cors from 'cors';
import connectDb from './config/dbConfig';
dotenv.config();
connectDb();
const PORT = process.env.PORT || 5000;
const app = exprss();
app.use(exprss.json());
app.use(exprss.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));
app.use("/api/",shortUrl);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
