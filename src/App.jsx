import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homepage, NotFound } from "./pages/index";
import { About, Experience, Navbar, Projects } from "./components/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about-me" element={<About />}></Route>
        <Route path="/my-projects" element={<Projects />}></Route>
        <Route path="/my-experience" element={<Experience />}></Route>
        <Route path="*" element={<NotFound notFound={true} />} />
      </Routes>
    </div>
  );
}

export default App;
