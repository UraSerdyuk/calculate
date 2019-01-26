const {PORT = 9988} = process.env;
const express = require('express');
const path = require("path");

const app = express();

app.use("/", express.static(path.join(__dirname, '1+1')));
app.use("/", (req, res) => {
    res.sendFile('./1+1/index.html');
})

app.listen(PORT, () => {
    console.log(`Server is started on port №${PORT}`);
});
