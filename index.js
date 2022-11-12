const express = require('express');
const { json, urlencoded } = require('express');
const connect = require('./config/database');
const taskRoutes = require("./routers/taskRoutes");

connect()

const app = express();

app.use("/task", taskRoutes);
app.use(json());

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send('zuri');
});
app.listen(PORT, () => console.log(`serving on port ${PORT}`));