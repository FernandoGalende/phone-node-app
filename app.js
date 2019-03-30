const express = require('express');
const routes = require('./routes/routes.js');

const app = express()

routes(app);

app.listen(3000, () => console.log('app running on port 3000'));