import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyHeader from "./components/main/MyHeader";
import Alphabetical from "./pages/Alphabetical";
import PageNotFound from "./pages/PageNotFound";
import ViewWatchlist from "./pages/Watchlist/ViewWatchlist";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyHeader />
        <Routes>
          <Route path="/" element={<Alphabetical />} />
          <Route path="/hightolow" element={<Alphabetical />} />
          {/* my_watchlist */}
          <Route path="/my_watchlist" element={<ViewWatchlist />} />
          {/* <Route path="/app" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="portfolio/:id" element={<Portfolio />} />
          </Route> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
