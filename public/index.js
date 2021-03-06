const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const env = require('dotenv').config({ path: '../.env' });

const app = express();
let public = __dirname;
//console.log(public)
app.use(cors());
app.use(express.static(public));
app.use('/', routes);

app.listen(process.env.PORT, () => {
    console.log(`opshit development server started on http://127.0.0.1:${process.env.PORT}`);
});