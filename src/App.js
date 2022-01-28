import './App.css';
import React from 'react';
import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Header name='Busy Zoo' />
      <Main isOpen={isOpen} 
        setIsOpen={setIsOpen} />
    </>

  );
}

export default App;
