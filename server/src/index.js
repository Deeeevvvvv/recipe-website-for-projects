import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import { userRouter } from './routes/user.js';
import { recipesRouter } from './routes/recipes.js';

dotenv.config()
const app = express();
const port = process.env.PORT || 4000;

// Allow server to accept json
app.use(express.json());
app.use(cors());

// Routes
app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

// Connect to MongoDB
mongoose.connect("mongodb+srv://admin:123@cluster0.do5jojc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
    app.listen(port, () => { console.log(`Server running on port: ${port}`) });
}).catch((error) => {
    console.log(error.message);
});

