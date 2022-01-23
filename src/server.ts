import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const server = express();

server.use(express.urlencoded({extended: true}));

server.use((req: Request, res: Response) => {
    res.status(404);
    res.json({error: 'No such endpoint'});
});

server.listen(process.env.PORT);