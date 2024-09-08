import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import router from './router/index.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());
app.use(bodyParser.json());

app.use('/', router);

app.listen(port, () => console.log(`Server started on port ${port}`));