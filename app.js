const express = require('express');
const app = express();

app.get('/', (req, res) => {
    let arr = {
        version: "1.0.0",
        name: "Jenkins Test"
    };
    res.end(JSON.stringify(arr));
})

app.listen('3000', () => {
    console.log("Server is starting on 3000 port...")
})
