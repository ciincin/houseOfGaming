import Home from "./views/Home";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SurveyView from "./views/SurveyView";
import Footer from "./components/footer/Footer";

import Navbar from "./components-victor/navbar/Navbar"


function App() {
  return (
    <div className="app-container" >
      {/* Component that is common to all VIEWS, this way it doesn't RE-Render each time*/}
      <div className="main-content">
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/survey" element={<SurveyView />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* Component that is common to all VIEWS */}
      <Footer />

    </div>
  );
}

export default App;
