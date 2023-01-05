import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MainPage from "./pages/MainPage/MainPage";
import ViewShares from "./pages/ViewShares/ViewShares";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="admin" element={<Dashboard />}>
            <Route path="home" element={<MainPage />} />
            <Route path="shares" element={<ViewShares />} />
          </Route>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// const AdminPath2 = (
//   <>
//     <Route path="home2" element={<AdminHome />} />
//     <Route path="hom" element={<AdminHome />} />
//   </>
// );
