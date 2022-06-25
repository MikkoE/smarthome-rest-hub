const express = require('express');
const router = express.Router();
const app = express();

//BodyParser
app.use(express.json())


//Routes
app.use('/i3', require('./routes/index'));
console.log("running on: IP:8080");

app.listen(8080);
