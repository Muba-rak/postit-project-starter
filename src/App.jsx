import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Getstarted from "./pages/GetStarted";
import Signin from "./pages/Signin";
import Welcome from "./pages/Welcome";
import Create from "./pages/Create";
import EditStory from "./pages/EditStory";
import Story from "./pages/Story";
import Allstories from "./pages/Allstories";
import MyStory from "./pages/MyStory";
import AllUserStories from "./pages/userStories/AllUserStories";
import { ProtectedRoute } from "./components/PrivateRoute";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* External pages */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Getstarted />} />
          <Route path="/login" element={<Signin />} />
          {/* end of external pages */}

          {/* Internal pages */}
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/create" element={<Create />} />
          <Route path="/allstories" element={<Allstories />} />
          <Route path="/mystories" element={<MyStory />}>
            <Route path="/mystories" element={<AllUserStories />} />
          </Route>
          <Route path="/story/:storyId" element={<Story />} />
          <Route path="/edit/:storyId" element={<EditStory />} />
          {/* end of external pages */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
