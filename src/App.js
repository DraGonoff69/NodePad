import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import NoteState from './components/context/notes/NoteState';
import Alert from './components/Alert';
function App() {
  return (
    <NoteState>

    <Router>
      <Navbar />
      <Alert/>
      <Routes>
      
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/About" element={<About/>} />
        
      </Routes>
    </Router>
    </NoteState>
  );
}

export default App;
