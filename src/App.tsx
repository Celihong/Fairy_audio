import { Route, Routes } from "react-router-dom";
import Searchstory from "./layout/searchstory";
import Story from "./pages/story";
import Cardstory from "./layout/cardstory";
import Storydetails from "./pages/storydetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/searchstory" element={<Searchstory />} />
        <Route path="/cardstory" element={<Cardstory />} />
        <Route path="/story" element={<Story />} />
        <Route path="/storydetails" element={<Storydetails />} />
      </Routes>
    </>
  );
}

export default App;
