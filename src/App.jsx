import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import LoginPagePassword from "./pages/LoginPagePassword";
import LoginPageRut from "./pages/LoginPageRut";
import PrescriptionsPage from "./pages/PrescriptionsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPageRut />} />
        <Route path="/login-password" element={<LoginPagePassword />} />
        <Route path="/dashboard" element={<PrescriptionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
