import './App.css';
import Pages from './components/pages/Pages';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
        <Pages />
    </Router>
  );
}

export default App;
