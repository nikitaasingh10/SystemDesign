import express from "express";
import userRouter from './routes/user.routes.js';

const app = express();
app.use(express.json());

// response time middleware
app.use((req, res, next) => {
    const start = Date.now();

    res.on('finish', () => {
        const duration = Date.now() - start;
        console.log(`${req.method} ${req.path} ${duration}ms`);
    });

    next();
});

app.get('/health', (req, res) => {
    res.json({status: "UP"})
});

app.use('/', userRouter);

export default app;