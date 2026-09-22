import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { ProtectedRoute, PublicOnlyRoute } from "./routes/ProtuctedRoutes";

import Home from "./screen/Home";
import Signup from "./screen/Signup";
import DashBoard from "./screen/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Navigate to="/" replace />} />

        <Route element={<PublicOnlyRoute />}>
          <Route path="/signup" element={<Signup />} />
        </Route>

        {/* Dashboard only when logged in */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<DashBoard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
