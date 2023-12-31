const express = require("express");
const port = process.env.PORT || 5500;
const app = express();
const cors = require("cors");
const fs = require("fs");
let requestId = null;

app.use(express.json());
app.use(cors());

app.get("/initialForm", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/postData", (req, res) => {
  const currentReqData = "currentRequest.json";
  const allReqData = "allRequests.json";

  try {
    // Read allRequests.json file and concat it
    let allRequests = [];
    if (fs.existsSync(allReqData)) {
      const fileData = fs.readFileSync(allReqData, "utf-8");
      allRequests = JSON.parse(fileData);
    }

    const jsonData = req.body;
    jsonData.requestId = genReqId(allRequests.length);

    // Write current request form data to the currentRequest.json file
    fs.writeFileSync(currentReqData, JSON.stringify(jsonData));

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

  // read form data from currentRequest.json
  const currentReqData = "currentRequest.json";
  const fileData = fs.readFileSync(currentReqData, "utf-8");
  const formData = JSON.parse(fileData);
  // Applicant details
  const applicantDetails = formData.formData;
  const leaderDetails = formData.formData2;
  const primaryFlowDetails = formData.formData3;
  const secondaryFlowDetails = formData.formData4;

  let emailMessage = `Hi, ${firstName}! Thanks for submitting your flow request. Please note Contact will make \"reasonable endeavors\" to provide the requested flow or level, however all approvals are subject to generation requirements including, but not limited to, unexpected changes in electricity demand, generation plant availability or significant flow changes in the Clutha Catchment. \n\nRequested flow:\n\tRequest ID# ${requestId}\n\tApplicant Details\n\t\tName: ${applicantDetails.firstName} ${applicantDetails.lastName}\n\t\tOrganisation: ${applicantDetails.organization}\n\t\tAddress: ${applicantDetails.address}\n\t\tEmail: ${applicantDetails.email}\n\t\tCellphone: ${applicantDetails.cellPhone}
  \n\tTrip Leader Details\n\t\tName: ${leaderDetails.firstName} ${leaderDetails.lastName}\n\t\tOrganisation: ${leaderDetails.organization}\n\t\tAddress: ${leaderDetails.address}\n\t\tEmail: ${leaderDetails.email}\n\t\tCellphone: ${leaderDetails.cellPhone}\n\t\tQualifications: `;

  if (formData.formData2.qualifications !== null && formData.formData2.qualifications !== undefined && formData.formData2.qualifications !== "") {
    emailMessage += `${leaderDetails.qualifications}`;
  } else {
    emailMessage += `Left blank`;
  }

  emailMessage += `\n\n\tPrimary Flow Preference\n\t\tFlow Range(ms³): ${primaryFlowDetails.flowLevel}\n\t\tStart Date and Time:${primaryFlowDetails.startDateTime}\n\t\tEnd Date and Time: ${primaryFlowDetails.endDateTime}\n\t\tArea of Request: ${primaryFlowDetails.Dropdown}\n\t\tActivity Description: ${primaryFlowDetails.Brief}\n\t\tParticipants: ${primaryFlowDetails.participants}\n\t\tNumber of Participants: ${primaryFlowDetails.NoParticpants}\n\n\tSecondary Flow Preference\n\t\tFlow Range(ms³): ${secondaryFlowDetails.flowLevel}\n\t\tStart Date and Time:${secondaryFlowDetails.startDateTime}\n\t\tEnd Date and Time: ${secondaryFlowDetails.endDateTime}\n\t\tArea of Request: ${secondaryFlowDetails.Dropdown}\n\nThanks again,\nContact Energy\n\nThis is an automated email, please do not reply to this email.`;

  // Write data to the text file
  fs.writeFile(email, emailMessage, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      console.log("Data has been written to the file.");
    }
  });
});

function genReqId(allRequestsLength) {
  let idPrefix = "OTGE";
  let idNum = String(allRequestsLength + 1).padStart(5, '0');
  requestId = idPrefix + idNum;
  return requestId;
}

app.get("/getReqId", (req, res) => {
  if (requestId != null)
  res.send({requestId});
})

// starting the server
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
