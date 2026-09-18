import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screen/Home";
import Signup from "./screen/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
