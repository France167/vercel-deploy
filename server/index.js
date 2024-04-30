const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send("Server is running")
})

app.listen(5001, console.log("Server has started on port 5001"))