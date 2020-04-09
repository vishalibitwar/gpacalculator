import React from 'react';
import './App.css';
import Home from './components/Home';
import Footer from './components/Footer';
import Modal from './components/Modal'

function App() {
  return (
    <div className="App">
      <Modal />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
