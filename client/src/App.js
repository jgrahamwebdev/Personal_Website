
import './App.css';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen /> } />
        <Route path='/about' element={<AboutScreen /> } />
        <Route path='/contact' element={<ContactScreen /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
