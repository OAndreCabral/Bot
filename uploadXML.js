import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';
import multer from 'multer';
import express from 'express';
import path from 'path';

const app = express();
const uploadDir = 'uploads/';

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const upload = multer({ 
    dest: uploadDir 
});

app.post('/upload', upload.single('file'), (request, response) => {
    console.log(request.file); 

    if (!request.file) {
        return response.status(400).send('Nenhum arquivo foi enviado.');
    }

    const xmlData = fs.readFileSync(request.file.path, 'utf-8');

    const parser = new XMLParser();
    const jsonObj = parser.parse(xmlData);
  
    console.log('Arquivo processado:', jsonObj);

    const jsonFileName = path.basename(request.file.originalname, path.extname(request.file.originalname)) + '.json';
    const jsonFilePath = path.join('uploads', jsonFileName);

    fs.writeFileSync(jsonFilePath, JSON.stringify(jsonObj, null, 2), "utf-8");
        
    fs.unlinkSync(request.file.path);

    response.json(jsonObj);
});

export default app;
