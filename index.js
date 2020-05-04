const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => console.log(`Server start at http://localhost: ${port}`));

app.get('/', (req, res) => res.send("Hello Node"));