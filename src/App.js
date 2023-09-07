import React from "react";
import ReactDOM from 'react-dom/client';
import "./App.css";
import RequestFormPage from "./RequestForm";

// Components
import "./components/Layout.css";
import "./components/Texts.css";
import NavigationBar from "./components/NavigationBar";
import Button from "./components/Button";
import locationIcon from "./images/locationIcon.svg";
import HeroImage from "./components/HeroImage";
import Footer from "./components/Footer";

function App() {

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
            <h3>Location</h3>
            <p>Description</p>
          </div>
        </div>
      </div>

      <div className="flow-requests">
        <div className="section-container">
          <div className="layout-column">
            <div className="two-columns">
              <h2 className="subsection-heading">Active Requests</h2>
              <div className="layout-column">
                {/* <div className="four-columns">

                </div> */}
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
                    <td>000cm&sup2;</td>
                  </tr>
                  <tr>
                    <td>Albert Park</td>
                    <td>000cm&sup2;</td>
                  </tr>
                  <tr>
                    <td>Hawea Flat</td>
                    <td>000cm&sup2;</td>
                  </tr>
                </table>
            </div>

            <Button id="toForm" variant="button-primary" onClick={RequestFormPage}>
              Send a wave request
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
