const express = require('express');
const cors = require('cors');
const mongoose =  require('mongoose');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({limit:'50mb'});

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
// app.use(express.json());
app.use(jsonParser);

// const uri = 'mongodb+srv://timeline:timeline@cluster0-uf51i.gcp.mongodb.net/test?retryWrites=true&w=majority';
// console.log(uri);
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const eventsRouter = require('./routes/events');
const commentsRouter = require('./routes/comments');

app.use('/users',usersRouter);
app.use('/events',eventsRouter);
app.use('/comments',commentsRouter);

app.listen(port, ()=>{
    console.log(`listening on port: ${port}`);
})