const express = require('express');
const port = 5000;
const userRouter = require('./Routes/UserRouter');
const cors=require('cors');
const app = express();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000'],
}))
app.use('/user', userRouter);
app.use(cors({
  origin: ['http://localhost:3000'],
}));
app.listen(port, () => {
  console.log(`Server is running on port 5000`);
})