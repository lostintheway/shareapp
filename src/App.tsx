import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Pages
import Dashboard from "./components/Dashboard/Dashboard";
import MainPage from "./pages/MainPage/MainPage";
import ViewShares from "./pages/ViewShares/ViewShares";
import LandingPage from "./pages/LandingPage/LandingPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="admin" element={<Dashboard />}>
          <Route path="home" element={<MainPage />} />
          <Route path="shares" element={<ViewShares />} />
        </Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const AdminPath2 = (
//   <>
//     <Route path="home2" element={<AdminHome />} />
//     <Route path="hom" element={<AdminHome />} />
//   </>
// );
