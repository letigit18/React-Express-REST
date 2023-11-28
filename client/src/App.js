
import './App.css';
import Form  from './FormData';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Form />
      </Router>
    
    </div>
  );
}

export default App;
