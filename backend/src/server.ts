import express, { type Request, type Response } from "express";
import cors from "cors";

import authRouter from "./routes/auth.routes.js";
import dashboardRouter from "./routes/dashboard.routes.js";
import channelRouter from "./routes/channel.routes.js";
import videoRouter from "./routes/video.routes.js";
import commentRouter from "./routes/comment.routes.js";
import historyRouter from "./routes/history.routes.js"; 


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    return res.json({
        message: 'setup success'
    });
})

// app.use('/api/v1/dashboard', dashboardRouter);

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', authRouter);

app.use('/api/v1/channels', channelRouter);
app.use('/api/v1/videos', videoRouter);
app.use('/api/v1/comments', commentRouter);
app.use('/api/v1/history', historyRouter);

app.listen(8000, () => console.log('server started'));