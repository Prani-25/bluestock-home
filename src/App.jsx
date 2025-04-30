import React from 'react'
import Header from './components/Header/Header.jsx'
import Matter from './components/Matter/Matter.jsx';
import Feature from './components/Features/Feature.jsx';
import OnTheGoSection from './components/OnSection/OnTheGoSection.jsx';
import "./App.css";

const App = () => {
  return (
    <div>
      <Header/>
      <Matter/>
      <Feature/>
      <OnTheGoSection/>
    </div>
  )
}

export default App
