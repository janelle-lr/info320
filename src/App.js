
import './App.css';
import React from 'react';
import logo from './contactLogo.png';
import Reqform from './Reqform'; 


// function App() {
//   return (
//     <div className="App">
//       <h1>contact project form</h1>
    
//       <form>
//       <label>Enter your name:
//         <input type="text" />
//       </label>
//     </form>

//     </div>
//   );
// }



export const Form = () => {

  const backButtonClick = () => {
    // Add your desired functionality here, e.g., go back in history
    window.history.back();
  };


    return (
        <div className="form">
            <div className="form-sub">
                <div className="header">
                    {/* <img className="image" src="320/src/contactLogo.png"/> */}
                    <img src={logo} className="image" />

                </div>

                <div className='about-form-box'>
                <div className="notice">Notice</div>

                <p className="contact-about-form">
                  <br>
                  </br>
                    Contact Energy will consider any and all Flow and/or Level Requests from the community. This form and its
                    information is used to determine if the request can be granted. <br />
                    <br />
                    Contact will make &#34;reasonable endeavors&#34; to provide the requested flow or level, however all approvals
                    are subject to generation requirements including, but not limited to, unexpected changes in electricity
                    demand, generation plant availability or significant flow changes in the Clutha Catchment.
                    <br />
                    <br />
                    All request should be followed up by the requestor for confirmation the day before the request.
                    <br />
                    <br />
                    Persons relying on this flow request MUST phone Contacts Clutha Control Centre both BEFORE and AFTER kayaking
                    is undertaken. Clutha Control Centre operates 24 hours per day and is contactable on 03 440 0329.
                    <br />
                    <br />
                    The primary risk of the activity is carried by the Applicant and Trip Leader. The Trip Leader must be
                    appropriately trained and experienced to lead their intended activity.
                  </p>

                  {/* <Reqform /> */}
                </div>

                <div className="Next-button">
                    <div className="overlap-group">
                      <button type='button' className="Next" onClick={Form} > Next</button>
                    </div>
                    </div>
             
                 <div className="Cancel-button">
                    <div className="div-wrapper">
                        <label className="cancel-text" onClick={backButtonClick}>Cancel</label>
                    </div>
                </div>
                <div className="page-no">1 of 5</div> 
            </div>
        </div>
    );
};






export default Form;
