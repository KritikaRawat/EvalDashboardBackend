const express = require('express')
const cors = require("cors")
const app = express()
const port = 3000
const mongoDB = require("./db")
mongoDB();
const mentorRouter = require('./Routes/mentorRoute');
const studentRouter = require('./Routes/studentRoute');


app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World! ---------------')
}) 

//Routes
app.use('/api/mentors', mentorRouter);
app.use('/api/students', studentRouter);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const mentorRouter = require('./Routes/mentorRoute');
// const studentRouter = require('./Routes/studentRoute');
// const app = express();

// app.use(cors());
// app.use(express.json());

// mongoose.connect("mongodb://localhost:27017/Evaldb");

// const db = mongoose.connection;

// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });

// db.once('open', () => {
//   console.log('Successfully connected to MongoDB');
// });

// const port = 3000;

// //Routes
// app.use('/api/mentors', mentorRouter);
// app.use('/api/students', studentRouter);

// app.listen(port, () => {
//   console.log(`App is listening on port ${port}`);
// });
