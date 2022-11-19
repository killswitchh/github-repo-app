import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Header></Header>
      </div>
      <div className="main-component">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
