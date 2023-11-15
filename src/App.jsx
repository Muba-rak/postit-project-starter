import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./components/PrivateRoute";
import {
  Home,
  GetStarted,
  Signin,
  Welcome,
  Create,
  Allstories,
  MyStory,
  Story,
  AllUserStories,
  EditStory,
  Error,
} from "./pages";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* External pages */}
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<GetStarted />} />
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
