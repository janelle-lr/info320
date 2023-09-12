import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import RequestFormPage from "./pages/RequestForm";
import InformationPage from "./pages/Information";
import IntialFormPage from "./pages/intialForm";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import "./components/Layout.css";
import "./components/Texts.css";
import Navbar from "./components/NavigationBar";

function App() {
  return (
    <>
      <Router>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<InformationPage />} />
                <Route path="/RequestForm" element={<RequestFormPage />} />
                <Route path="/IntialForm" element={<IntialFormPage/>} />

            </Routes>
        </Router>

    </>
  );
}

export default App;
