
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen /> } />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
