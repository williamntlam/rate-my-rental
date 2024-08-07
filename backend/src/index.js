const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

/* 

app.get('/', (req, res) => {

    res.send('Hello world');
    
});

*/

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
