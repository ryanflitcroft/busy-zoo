import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [lionSize, setLionSize] = useState(3);
  const [tigerSize, setTigerSize] = useState(3);

  return (
    <>
      <Header name='Busy Zoo' />
      <Main isOpen={isOpen} 
        setIsOpen={setIsOpen}
        lionSize={lionSize}
        setLionSize={setLionSize}
        tigerSize={tigerSize}
        setTigerSize={setTigerSize} />
    </>

  );
}

export default App;
