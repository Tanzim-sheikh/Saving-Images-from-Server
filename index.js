import express from 'express';
import router from './routes/uploadRoute.js';


const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/upload', router);

app.get('/', (req, res) => {
  res.send('Welcome to Image Upload API');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
