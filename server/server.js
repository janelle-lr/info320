const express = require("express");
const port = process.env.PORT || 5500;
const app = express();
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
const { v1: uuidv1 } = require('uuid');
let requestId = null;


app.use(express.json());
app.use(cors());
// app.use(express.static("public"));
// app.use(express.static(path.resolve(__dirname, './src')));

app.get("/initialForm", (req, res) => {
  // res.send("Hello World");
  // res.sendFile(path.resolve(__dirname, './src', 'index.js'));
  res.json({ message: "Hello from server!" });
});

// this postData version saves the entire request history items
/* app.post("/postData", (req, res) => {
  const fileName = "allFlowRequests.json";

  // Check if the file exists and read its contents, this will make the file concat the prev content
  let items = [];
  if (fs.existsSync(fileName)) {
    const fileData = fs.readFileSync(fileName, 'utf-8');
    items = JSON.parse(fileData);
  }
  // Handle JSON data received in the request body
  try {
    const jsonData = req.body;
    // Add the received data to the items array
    items.push(jsonData);
    // Write the updated items array back to the file
    fs.writeFile(currReqFile, JSON.stringify(items), (err) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).send("Data saved to formInput.json");
        console.log("Data saved to formInput.json");
      }
    });
  } catch (error) {
    console.error("Error handling JSON:", error);
    res.status(400).send("Invalid JSON format");
  }
});*/

app.post("/postData", (req, res) => {
  const currentReqData = "currentRequest.json";
  const allReqData = "allRequests.json";

  try {
    const jsonData = req.body;

    // Write current request form data to the currentRequest.json file
    fs.writeFileSync(currentReqData, JSON.stringify(jsonData));

    // Read allRequests.json file and concat it
    let allRequests = [];
    if (fs.existsSync(allReqData)) {
      const fileData = fs.readFileSync(allReqData, "utf-8");
      allRequests = JSON.parse(fileData);
    }

    // Add the current request data to the all requests array
    allRequests.push(jsonData);

    // Overwrite allRequests.json with the updated allRequests array
    fs.writeFileSync(allReqData, JSON.stringify(allRequests));

    res.status(200).send("Data saved successfully");
    console.log("Data saved successfully");
  } catch (error) {
    console.error("Unable to save JSON: ", error);
    res.status(400).send("Unable to save JSON");
  }
});

app.post("/sendEmail", (req, res) => {
  const firstName = req.body.firstName;
  const email = "confirmationEmail.txt";
  requestId = genReqId();
  const emailMessage = `Hi, ${firstName}! Thanks for submitting your flow request. Please note (insert the disclaimer about not being guaranteed). \n\nRequested flow:\n\tRequest ID# ${requestId}\n\t[List info from form]`;

  // Write data to the text file
  fs.writeFile(email, emailMessage, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      console.log("Data has been written to the file.");
    }
  });
});

function genReqId() {
  // Extract the first 8 characters of the UUID
  return uuidv1().slice(0, 8);
}

app.get("/getReqId", (req, res) => {
  if (requestId != null)
  res.send({requestId});
})

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
