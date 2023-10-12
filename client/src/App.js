import './App.css';
import Home from "./pages/Home.js";
import Dashboard from "./pages/Dashboard.js";
import Error from "./pages/Error.js";
import Register from "./pages/Register.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;