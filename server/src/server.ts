import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import { station } from './station';

const app = express();

app.use(cors());
app.use(json());

app.use(station);

app.get('/', (req, res) => {
    res.send({ ok: true });
});

app.listen(3000, () => {
    console.log('Server started on port 3000.');
});