

const express = require('express');
const app = express();
const port = 9999;

app.listen(port, () => {
    console.log(`open http://localhost:9999/${port}`);
});

app.get(`/`, (request, response) => {
    console.log(`Welcome!`);
    response.send(`Welcome to my app!`);
});




