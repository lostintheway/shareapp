import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import MainPage from "./pages/MainPage/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Dashboard />}>
            <Route path="home" element={<MainPage />} />
            {/* {AdminPath2} */}
          </Route>
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
