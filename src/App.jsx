import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Getstarted from "./pages/GetStarted";
import Signin from "./pages/Signin";
import Welcome from "./pages/Welcome";
import Create from "./pages/Create";
import EditStory from "./pages/EditStory";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Getstarted />} />
          <Route path="/login" element={<Signin />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:storyId" element={<EditStory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
