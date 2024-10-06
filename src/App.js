import { Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import CaseDetails from "./pages/CaseDetails";
import Questionnaire from "./pages/Questionnaire";

function App() {
  return (
    <Fragment>
      <BrowserRouter basename="/sm-frontend">
      <Routes>
        <Route path="/" element={<Questionnaire/>}/>
        <Route path="/:id" element={<CaseDetails/>}/>
      </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
