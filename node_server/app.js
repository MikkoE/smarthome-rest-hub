const express = require('express');
const router = express.Router();
const app = express();

//BodyParser
app.use(express.json())


//Routes
app.use('/i3', require('./routes/index'));

app.listen(8080);
