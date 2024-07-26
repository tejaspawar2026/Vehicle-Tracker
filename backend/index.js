import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dummyData from './dummyData.js'; 

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.json(dummyData);
});
