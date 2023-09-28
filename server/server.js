const express = require("express");
const port = process.env.PORT || 5500;
const app = express();
const cors = require("cors");
const fs = require("fs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nodemailer = require("nodemailer");
let formInputsMap = {};

// // Add key-value pairs
// hashMap['key1'] = 'value1';
// hashMap['key2'] = 'value2';

app.use(express.json());
app.use(cors());
// app.use(express.static("public"));
// app.use(express.static(path.resolve(__dirname, './src')));

app.get("/initialForm", (req, res) => {
  // res.send("Hello World");
  // res.sendFile(path.resolve(__dirname, './src', 'index.js'));
  res.json({ message: "Hello from server!" });
});

// SCHEMAS
const form1Schema = new Schema({
  applicantDetails: {
    firstName: String,
    lastName: String,
    organization: String,
    address: String,
    email: String,
    phoneNumber: Number,
  },
});

const form2Schema = new Schema({
  tripLeader: {
    firstName: String,
    lastName: String,
    organization: String,
    address: String,
    email: String,
    phoneNumber: Number,
    qualifications: String,
  },
});

const form1Model = mongoose.model("form1Model", form1Schema);
const form2Model = mongoose.model("form2Model", form2Schema);

function getData(req, res) {
  // app.get('/loadServer', (req, res) => {
  const fileName = "formInput.json";

  if (fs.existsSync(fileName)) {
    // if file exists read and send its contents
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
        let items = JSON.parse(data);
        res.status(200).json(items);
        console.log("Loaded from formInput.json");
      }
    });
  } else {
    res.status(404).send("formInput.json file not found");
  }
}

function postData(req, res, schema, input, key) {
  const fileName = "formInput.json";
  const schemaModel = schema;
  const item = input;
  //   const jsonObj2 = JSON.stringify(item);
  const jsonObj2 = item;
  const jsonArray = [];
  // const newJsonEntry = input;

  if (fs.existsSync(fileName)) {
    // if (key in formInputsMap){
    //   console.log("key exists");
    // }

    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
      }
    });
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
        let item2 = JSON.parse(data);
        // const jsonObj1 = JSON.stringify(item2);
        const jsonObj1 = item2;

        console.log(jsonObj1[0]);
        jsonArray.push(jsonObj1);
        jsonArray.push(jsonObj2);
        console.log("jsonArr0 = " + jsonArray[0]);
        console.log("jsonArr1 = " + jsonArray[1]);
        console.log("jsonArr = " + jsonArray.toString());
        fs.writeFile(fileName, JSON.stringify(jsonArray), (err) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).send("saved to formInput.json");
            console.log("saved to formInput.json");
          }
        });
      }
    });
  } else {
    fs.writeFile(fileName, JSON.stringify(jsonObj2), (err) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).send("saved to formInput.json");
        console.log("saved to formInput.json");
      }
    });
    // fs.writeFile(fileName, JSON.stringify(newJsonEntry), (err) => {
    //   if (err) {
    //     res.status(500).json(err);
    //   } else {
    //     res.status(200).send("saved to formInput.json");
    //     console.log("saved to formInput.json");
    //     formInputsMap[key] = newJsonEntry;
    //   }
    // });
  }

  //   const schemaModel = schema;
  //   const item = input;
  //   const items = JSON.stringify(item);

  //   fs.writeFile(fileName, items, (err) => {
  //     if (err) {
  //       res.status(500).json(err);
  //     } else {
  //       res.status(200).send("saved to items.json");
  //       console.log("saved to items.json");
  //     }
  //   });
}

function loadServer(req, res) {
  // app.get('/loadServer', (req, res) => {
  const fileName = "formInput.json";

  if (fs.existsSync(fileName)) {
    // if file exists read and send its contents
    fs.readFile(fileName, (err, data) => {
      if (err) {
        res.status(500).json(err);
      } else {
        let items = JSON.parse(data);
        res.status(200).json(items);
        console.log("Loaded from items.json");
      }
    });
  } else {
    res.status(404).send("items.json file not found");
  }
  //   });
}

app.post("/initialForm/postData", (req, res) => {
  //   const schemaModel = new Schema({
  //     applicantDetails: {
  //       firstName: String,
  //       lastName: String,
  //       organization: String,
  //       address: String,
  //       email: String,
  //       phoneNumber: Number,
  //     },
  //   });

  //   const Model = mongoose.model("Model", schemaModel);

  const input = new form1Model({
    applicantDetails: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      organization: req.body.organization,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
    },
  });

  // console.log("email = " + input.applicantDetails.email);
  // // Create a transport using a local SMTP server (e.g., MailHog)
  // const transporter = nodemailer.createTransport({
  //   host: 'smtp.gmail.com',
  //   port: 587, // SMTP server port (MailHog default)
  //   ignoreTLS: true, // Disable TLS (for local testing)
  // });

  // // Define email data
  // const mailOptions = {
  //   from: "limrajane@gmail.com", // Sender's email address
  //   to: input.applicantDetails.email, // Recipient's email address
  //   subject: "Test Email", // Email subject
  //   text: "This is a test email sent without authentication.", // Plain text body
  // };

  // // Send the email
  // transporter.sendMail(mailOptions, (error, info) => {
  //   if (error) {
  //     console.error("Error sending email:", error);
  //   } else {
  //     console.log("Email sent:", info.response);
  //   }
  // });
  postData(req, res, form1Schema, input, "applicantDetails");
  //   let items = JSON.stringify(item);

  //   fs.writeFile("items.json", items, (err) => {
  //     if (err) {
  //       res.status(500).json(err);
  //     }
  //     res.status(200).send("saved to items.json");
  //     console.log("saved to items.json");
  //   });
});

app.post("/SecondForm/postData", (req, res) => {
  //   const schemaModel = new Schema({
  //     tripLeader: {
  //       firstName: String,
  //       lastName: String,
  //       organization: String,
  //       address: String,
  //       email: String,
  //       phoneNumber: Number,
  //       qualifications: String,
  //     },
  //   });

  //   const Leader = mongoose.model("Leader", schemaModel);
  const input = new form2Model({
    tripLeader: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      organization: req.body.organization,
      address: req.body.address,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      qualifications: req.body.qualifications,
    },
  });

  postData(req, res, form2Schema, input);
  //   let items = JSON.stringify(input);

  //   fs.writeFile("items.json", items, (err) => {
  //     if (err) {
  //       res.status(500).json(err);
  //     }
  //     res.status(200).send("saved to items.json");
  //     console.log("saved to items.json");
  //   });
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
