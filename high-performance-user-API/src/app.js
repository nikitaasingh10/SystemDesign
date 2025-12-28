import express from "express";

const app = express();
app.use(express.json());

app.get('/health', (req, res) => {
    res.json({status: "UP"})
});

export default app;