const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
const fs = require('fs');
const path = require('path');
var React = require('react');
var ReactDOMServer = require('react-dom/server');

app.use(express.json());
app.use(cors());
// app.use(express.static("public"));
// app.use(express.static(path.resolve(__dirname, './src')));

app.get("/initialForm", (req, res) => {
    // res.send("Hello World");
    // res.sendFile(path.resolve(__dirname, './src', 'index.js'));
    res.json({ message: "Hello from server!" });
});

app.post("/initialForm/postData", (req, res) => {
   console.log("in server req.body = " + req.body);
        let items = JSON.stringify(req.body);
        
        fs.writeFile('items.json', items, (err) => {
            if (err) {
                res.status(500).json(err);
            }
            res.status(200).send('saved to items.json');
            console.log("saved to items.json");
        });
   
    // res.json({ message: "Hello from server!" });
});

// app.get("/message", (req, res) => {
//   res.json({ message: "Hello from server!" });
// });

// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static("public"));
// app.get("/", (req, res) => {
//     // res.send("Hello World");
//     res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
// });

// starting the server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});