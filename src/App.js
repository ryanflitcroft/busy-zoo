import './App.css';
// import React from 'react';
// import { useState } from 'react';
import Header from './Header/Header';
import Main from './Main/Main';

import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      lionSize: 3,
      tigerSize: 3,
      animalParade: ['🦧']
    };
  }

  render() {
    return (
      <>
        <Header name='Busy Zoo' isOpen={this.state.isOpen}/>
        <Main isOpen={this.state.isOpen} 
          // setIsOpen={setIsOpen}
          lionSize={this.state.lionSize}
          // setLionSize={setLionSize}
          tigerSize={this.state.tigerSize}
          // setTigerSize={setTigerSize}
          animalParade={this.state.animalParade}
          // setAnimalParade={setAnimalParade} 
        />
      </>
    );
  }
}


// function App() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [lionSize, setLionSize] = useState(3);
//   const [tigerSize, setTigerSize] = useState(3);
//   const [animalParade, setAnimalParade] = useState(['🦧']);

//   return (
//     <>
//       <Header name='Busy Zoo' />
//       <Main isOpen={isOpen} 
//         setIsOpen={setIsOpen}
//         lionSize={lionSize}
//         setLionSize={setLionSize}
//         tigerSize={tigerSize}
//         setTigerSize={setTigerSize}
//         animalParade={animalParade}
//         setAnimalParade={setAnimalParade} />
//     </>

//   );
// }

// export default App;