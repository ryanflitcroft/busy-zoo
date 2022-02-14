// import React from 'react';
import Animal from './Animal';
import './ParadeSection.css';

import React, { Component } from 'react';

export default class ParadeSection extends Component {
  render() {
    return (
      <section className='parade'>
        <h2>Busy Zoo Parade</h2>
        <div>
          {this.props.animalParade.map((animal, i) => 
            <Animal key={animal, i} animal={animal} />
          )}
        </div>
        <div>
          {/* FIXME: yeah, idk what im doing with state here */}
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🦒'] })}>🦒</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🦛'] })}>🦛</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🦓'] })}>🦓</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🐘'] })}>🐘</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🐒'] })}>🐒</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🦙'] })}>🦙</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🦥'] })}>🦥</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🐼'] })}>🐼</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🐨'] })}>🐨</button>
          <button onClick={() => this.props.setState({ animalParade: [...this.props.animalParade, '🦦'] })}>🦦</button>
        </div>
      </section>
    );
  }
}


// export default function ParadeSection({ animalParade, 
//   setAnimalParade }) {

//   return (
//     <section className='parade'>
//       <h2>Busy Zoo Parade</h2>
//       <div>
//         {animalParade.map((animal, i) => 
//           <Animal key={animal, i} animal={animal} />
//         )}
//       </div>
//       <div>
//         <button onClick={() => setAnimalParade([...animalParade, '🦒'])}>🦒</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🦛'])}>🦛</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🦓'])}>🦓</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🐘'])}>🐘</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🐒'])}>🐒</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🦙'])}>🦙</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🦥'])}>🦥</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🐼'])}>🐼</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🐨'])}>🐨</button>
//         <button onClick={() => setAnimalParade([...animalParade, '🦦'])}>🦦</button>
//       </div>
//     </section>
//   );
// }
