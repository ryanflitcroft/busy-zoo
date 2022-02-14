// import React from 'react';
import './Main.css';
import OpenSign from './OpenSign/OpenSign';
import FightSection from './FightSection/FightSection';
import ParadeSection from './ParadeSection/ParadeSection';

import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return (
      <main>
        <OpenSign isOpen={this.props.isOpen} />
        <h2>Busy Zoo Microscopy</h2>
        <FightSection lionSize={this.props.lionSize}
          // setLionSize={this.props.setLionSize}
          tigerSize={this.props.tigerSize}
          // setTigerSize={this.props.setTigerSize}
        />
        <ParadeSection animalParade={this.props.animalParade}
          // setAnimalParade={props.setAnimalParade} 
        />
      </main>
    );
  }
}


// export default function Main(props) {
//   return (
//     <main>
//       <OpenSign isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
//       <h2>Busy Zoo Microscopy</h2>
//       <FightSection lionSize={props.lionSize}
//         setLionSize={props.setLionSize}
//         tigerSize={props.tigerSize}
//         setTigerSize={props.setTigerSize}/>
//       <ParadeSection animalParade={props.animalParade}
//         setAnimalParade={props.setAnimalParade} />
//     </main>
//   );
// }