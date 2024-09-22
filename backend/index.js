const express = require('express');
const port = 5000;
const userRouter = require('./Routes/UserRouter');
const utilRouter = require('./Routes/UtilRouter');
const ClubRouter = require('./Routes/ClubRouter');
const eventRouter = require('./Routes/EventRouter');
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
app.use('/uploads', express.static('uploads')); // Serves files from 'uploads' directory
app.use('/util', utilRouter);

app.use('/clubs', ClubRouter);
app.use('/events', eventRouter);
app.listen(port, () => {
  console.log(`Server is running on port 5000`);
})