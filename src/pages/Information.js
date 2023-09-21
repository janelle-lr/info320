import React from "react";
import ReactDOM from "react-dom/client";
import "./Information.css";
import { Link } from "react-router-dom";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";
import Button from "../components/Button";
import locationIcon from "../images/locationIcon.svg";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import data from "../components/river.json"

function Information () {
  const flows = data.river

   // sort the flows by "READING_NZST_DATETIME" and get the last three items
   const sortedFlows = flows
   .slice()
   .sort((a, b) => {
    const dateA = new Date(a["READING_NZST_DATETIME"]);
    const dateB = new Date(b["READING_NZST_DATETIME"]);
    return dateB - dateA;
  })
   .slice(0, 3);

  return (
    <>
      <NavigationBar />
      <HeroImage />

      <div className="section-container locations">
        <h2 className="subsection-heading">Key Locations</h2>
        <div className="layout-column main-content">
          <div className="three-columns">
            <img src={locationIcon} alt="Hero Image" />
            <h3 className="subtitle">Hawea Flat</h3>
            <h5>(The Wave)</h5>
            <p>Time for flow requested to reach location: 1.5 Hours </p>
          </div>
          <div className="three-columns middle-column">
            <img src={locationIcon} alt="Hero Image" />
            <h3>Albert Park</h3>
            <p>Time for flow requested to reach location: 5 Hours </p>
          </div>
          <div className="three-columns">
            <img src={locationIcon} alt="Hero Image" />
            <h3>Camphill</h3>
            <p>Description</p>
          </div>
        </div>
      </div>

      <div className="flow-requests">
        <div className="section-container">
          <div className="layout-column">
            <div className="two-columns">
              <h2 className="subsection-heading">Current Flows</h2>
              <div className="layout-column">
                <table className="active-requests">
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Flow Level</th>
                  </tr>
                  {sortedFlows.map((post) => (
                  <tr key={post.id}>
                    <td> 
                    {post.Day}
                      <br/>
                    {post.Month_Date}
                    </td>
                    <td>{post.Time}</td>
                    <td>{post.TELEMETRY_LOCATION}</td>
                    <td>{post.READING_VALUE}ms&sup3;</td>
                  </tr>
                ))}
                </table>
              </div>
            </div>

            <div className="two-columns">
              <h2 className="subsection-heading">Active Requests</h2>
              <table className="current-flows">
                <tr>
                  <th>Day</th>
                  <th>Time</th>
                </tr>
                <tr>
                  <td>Hawea Flat</td>
                  <td>00:00 pm</td>
                </tr>
                <tr>
                  <td>Albert Park</td>
                  <td>00:00 pm</td>
                </tr>
                <tr>
                  <td>Hawea Flat</td>
                  <td>00:00 pm</td>
                </tr>
              </table>
            </div>
            <Button
              id="toForm"
              variant="button-primary"
            //   to="/RequestForm"
              
            //   onClick=""
            >
                <Link to="/RequestForm">
              Send a wave request
             </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Information;
