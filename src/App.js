// ROUTING
import React, { useState, useEffect } from "react";
import RequestFormPage from "./pages/RequestForm";
import InformationPage from "./pages/Information";
import IntialFormPage from "./pages/intialForm";
import SecondFormPage from "./pages/SecondForm";
import ThirdFormPage from "./pages/ThirdForm";
import FourthFormPage from "./pages/FourthForm";
import FifthFormPage from "./pages/FifthForm";
import ConfirmationPage from "./pages/Conformation";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components and pages
import "./components/Layout.css";
import "./components/Texts.css";
import "./pages/Form.css";
import "./App.css";

function App() {  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InformationPage />} />
        <Route path="/RequestForm" element={<RequestFormPage />} />
        <Route path="/IntialForm" element={<IntialFormPage />} />
        <Route path="/SecondForm" element={<SecondFormPage />} />
        <Route path="/ThirdForm" element={<ThirdFormPage />} />
        <Route path="/FourthForm" element={<FourthFormPage />} />
        <Route path="/FifthForm" element={<FifthFormPage />} />
        <Route path="/Conformation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App