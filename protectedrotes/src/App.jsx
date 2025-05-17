import Home from "./Components/Home";
import Login from "./Components/Login";
import Nav from "./Components/Nav";
import ProtectedRoute from "./Components/ProtectedRoute";
import Setting from "./Components/Setting";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/setting" element={<Setting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
