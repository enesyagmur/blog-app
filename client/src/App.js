import "./App.scss";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Account from "./pages/Account/Account";
import Write from "./pages/write/Write";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/write" element={<Write />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

// home - login - register sayfalarının görünümleri bitti
