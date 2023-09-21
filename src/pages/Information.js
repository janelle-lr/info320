import React , { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./Information.css";
import { Link } from "react-router-dom";

// Components
import "../components/Layout.css";
import "../components/Texts.css";
import Button from "../components/Button";
import locationIcon from "../images/locationIcon.svg";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import NavigationBar from "../components/NavigationBar";

function Information() {
    // const [message, setMessage] = useState("");

    // useEffect(() => {
    //   fetch("http://localhost:5000/")
    //     .then((res) => res.json())
    //     .then((data) => setMessage(data.message));
    // }, []);

  return (
    <>
      <NavigationBar />
      <HeroImage />

      <div className="section-container locations">
        <h2 className="subsection-heading">Key Locations</h2>
        {/* <h2 className="subsection-heading">{message}</h2> */}
        <div className="layout-column main-content">
          <div className="two-columns mobile-single-col">
            <img src={locationIcon} alt="Hero Image" />
            <div className="location-text">
              <div>
                <h3 className="subtitle">Hawea Flat</h3>
                <h5>(The Wave)</h5>
              </div>

              <p>Time for flow requested to reach location: 1.5 Hours </p>
            </div>
          </div>
          <div className="two-columns mobile-single-col">
            <img src={locationIcon} alt="Hero Image" />
            <div className="location-text">
              <h3 className="subtitle">Albert Park</h3>
              {/* <br /> */}
              <p className="location-paragraph">Time for flow requested to reach location: 5 Hours </p>
              </div>
            </div>
        </div>
      </div>

      <div className="flow-requests">
        <div className="section-container">
          <div className="layout-column">
            <div className="two-columns">
              <h2 className="subsection-heading">Active Flow Requests</h2>
              <div className="">
                <table className="active-requests">
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Flow Level</th>
                  </tr>
                  <tr>
                    <td>
                      Mon
                      <br />
                      Aug 14
                    </td>
                    <td>00:00 pm</td>
                    <td>Hawea Flat</td>
                    <td>000cm&sup2;</td>
                  </tr>
                  <tr>
                    <td>
                      Mon
                      <br />
                      Aug 14
                    </td>
                    <td>00:00 pm</td>
                    <td>Hawea Flat</td>
                    <td>000cm&sup2;</td>
                  </tr>
                  <tr>
                    <td>
                      Mon
                      <br />
                      Aug 14
                    </td>
                    <td>00:00 pm</td>
                    <td>Hawea Flat</td>
                    <td>000cm&sup2;</td>
                  </tr>
                </table>
              </div>
            </div>

            <div className="two-columns">
              <h2 className="subsection-heading">Current Flows</h2>
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
            <Button variant="button-primary" destination="/RequestForm">
              Send a wave request
            </Button>

            {/* <Button
              id="toForm"
              variant="button-primary"
            //   to="/RequestForm"
              
            //   onClick=""
            >
                <Link to="/RequestForm">
              Send a wave request
             </Link>
            </Button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Information;
