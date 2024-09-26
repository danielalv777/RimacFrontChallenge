// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './commons/header';
import Home from './pages/home';
import SecurePlanes from './pages/securePlans';

// Styles
import './App.scss'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />} 
          />
          <Route path="/planes" element={
            <SecurePlanes />} 
          />
        </Routes>
        
      </div>
      
    </Router>
  )
}

export default App
