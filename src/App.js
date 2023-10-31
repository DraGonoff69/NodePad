import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/NoteState';

import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {

  return (
    <NoteState>

    <Router>
      <Navbar />
      <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/SignUp" element={<SignUp/>} />
        
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
