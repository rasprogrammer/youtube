import express from "express";
import type { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response) => {
    return res.json({
        message: 'setup success'
    })
});

app.listen(8000);