import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Page/Home";
import Spotify from "../Page/Spotify";
import Youtube from "../Page/Youtube";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Spotify" element={<Spotify />} />
        <Route path="/Youtube" element={<Youtube />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
