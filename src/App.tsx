import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHeader from "./components/main/MyHeader";
import Alphabetical from "./pages/Alphabetical";
import PageNotFound from "./pages/PageNotFound";
import ViewWatchlist from "./pages/Watchlist/ViewWatchlist";
import "./styles/glowDot.css";
import AddWatchlist from "./pages/Watchlist/AddWatchlist";
import DashboardLayout from "./components/layouts/DashboardLayout";

function App() {
  // console.log(import.meta.env.ENV);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHeader />}>
            <Route index element={<Alphabetical />} />
            <Route path="hightolow" element={<Alphabetical />} />
            <Route path="my_watchlist" element={<ViewWatchlist />} />
            <Route path="add_watchlist" element={<AddWatchlist />} />
          </Route>
          <Route path="/admin" element={<DashboardLayout />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
