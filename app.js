import express from 'express';
import dotenv from 'dotenv';

import router from './router/index.js';
import path from "path";
import cors from "cors";
import {blockNonBrowsersRequests} from "./middlwares/blockNonBrowsersRequests.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;

app.use(blockNonBrowsersRequests);

app.use(cors({
    origin: 'https://www.sebastatsi.am',
    methods: ["GET",
        "POST",
        "PUT",
        "DELETE",
        "PATCH",
        "OPTIONS"],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', express.static(path.resolve('public')));

app.use('/', router);

app.listen(port, () => console.log(`Server started on port ${port}`));