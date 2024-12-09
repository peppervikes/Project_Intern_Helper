const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const scheduleRoutes = require('./routes/schedule');

app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/schedule', scheduleRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));
