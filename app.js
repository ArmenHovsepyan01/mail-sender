import express from 'express';
import dotenv from 'dotenv';

import router from './router/index.js';
import path from "path";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

app.use('/api', express.static(path.resolve('public')));

app.use('/', router);

app.listen(port, () => console.log(`Server started on port ${port}`));