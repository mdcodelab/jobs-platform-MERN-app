import './App.css';
import Home from "./pages/Home.js";
import Error from "./pages/Error.js";
import Register from "./pages/Register.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
////files from pages/dashboard 
import AddJob from "./pages/dashboard/AddJob";
import AllJobs from "./pages/dashboard/AllJobs";
import Profile from "./pages/dashboard/Profile";
import SharedLayout from "./pages/dashboard/SharedLayout";
import Stats from './pages/dashboard/Stats';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="stats" element={<Stats></Stats>}></Route>
          <Route path="add-job" element={<AddJob></AddJob>}></Route>
          <Route path="all-jobs" element={<AllJobs></AllJobs>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
        </Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  );
}



export default App;