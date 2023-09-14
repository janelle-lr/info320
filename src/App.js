import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import RequestFormPage from "./pages/RequestForm";
import InformationPage from "./pages/Information";
import IntialFormPage from "./pages/intialForm";
import SecondFormPage from "./pages/SecondForm";
import ThirdFormPage from "./pages/ThirdForm";
import FourthFormPage from "./pages/FourthForm";
import FifthFormPage from "./pages/FifthForm";
import ConfirmationPage from "./pages/Conformation";






import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import "./components/Layout.css";
import "./components/Texts.css";

function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<InformationPage />} />
                <Route path="/RequestForm" element={<RequestFormPage />} />
                <Route path="/IntialForm" element={<IntialFormPage/>} />
                <Route path="/SecondForm" element={<SecondFormPage/>} />
                <Route path="/ThirdForm" element={<ThirdFormPage/>} />
                <Route path="/FourthForm" element={<FourthFormPage/>} />
                <Route path="/FifthForm" element={<FifthFormPage/>} />
                <Route path="/Conformation" element={<ConfirmationPage/>} />




            </Routes>
        </Router>

    </>
  );
}

export default App;
