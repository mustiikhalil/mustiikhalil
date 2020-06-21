import React from 'react';
import './App.css';
import About from './components/About'
import Projects from './components/Projects'
import Header from './components/Header'

function App() {
  return (
    <div> 
      <Header />
        <div>
          <About />
          <Projects />
      </div>
    </div>
  );
}

export default App;
