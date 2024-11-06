console.log("hello from ts backend");
const express = require('express');

const app = express();
const PORT = 8000;

app.get("/", (req:any, res:any) => {
    res.send("hello from ts backend with express");
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
