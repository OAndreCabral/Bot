import express from 'express';
import uploadXML from './uploadXML.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(uploadXML);

const port = 3000;
app.listen(port, () => {
    console.log('====================================');
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('====================================');
});

export default app;
