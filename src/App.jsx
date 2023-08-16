import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import Nav_bar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />} />
          <Route path="/" element={<HomeLayout />} />
          {/* Add more routes as needed */}
          {/* For example: <Route path="/otherpage" element={<OtherPageLayout />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Layout component that includes the Navbar, Home, and Footer
const HomeLayout = () => {
  return (
    <>
      <Nav_bar />
      <Home />
      <Footer />
    </>
  );
}

// Layout component for the Dashboard page (without Navbar, Home and Footer)
const DashboardLayout = () => {
  return (
    <>
      <Dashboard />
    </>
  );
}

export default App;
