import Home from "./Components/Home"
import Lockout from "./Components/Lockout"
import Login from "./Components/Login"
import Nav from "./Components/Nav";
import Setting from "./Components/Setting"
import{BrowserRouter,Routes,Route}from 'react-router-dom';
function App() {
  return (
    <>
    <BrowserRouter>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/setting" element={<Setting/>}/>
      <Route path="/logout" element={<Lockout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
