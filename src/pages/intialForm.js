import React from 'react';
import './intialForm.css';
import { Link } from "react-router-dom";


// Components
import "../components/Layout.css";
import "../components/Texts.css";
import NavigationBar from "../components/NavigationBar";


function InitialForm() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Request Form Page 1 </h1>
      </header>
      <main className="app-main">
        <p>Here's some content.</p>
      </main>

    </div>
  );
}

export default InitialForm;

