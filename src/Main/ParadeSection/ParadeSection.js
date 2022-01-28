import React from 'react';
import Animal from './Animal';
import './ParadeSection.css';

export default function ParadeSection({ animalParade, 
  setAnimalParade }) {

  console.log(animalParade);
  return (
    <section>
      <div>
        {animalParade.map((animal, i) => 
          <Animal key={animal, i} animal={animal} />
        )}
      </div>
      <div>
        <button onClick={() => setAnimalParade([...animalParade, '🦒'])}>🦒</button>
        <button onClick={() => setAnimalParade([...animalParade, '🦛'])}>🦛</button>
        <button onClick={() => setAnimalParade([...animalParade, '🦓'])}>🦓</button>
        <button onClick={() => setAnimalParade([...animalParade, '🐘'])}>🐘</button>
        <button onClick={() => setAnimalParade([...animalParade, '🐒'])}>🐒</button>
        <button onClick={() => setAnimalParade([...animalParade, '🦙'])}>🦙</button>
        <button onClick={() => setAnimalParade([...animalParade, '🦥'])}>🦥</button>
        <button onClick={() => setAnimalParade([...animalParade, '🐼'])}>🐼</button>
        <button onClick={() => setAnimalParade([...animalParade, '🐨'])}>🐨</button>
        <button onClick={() => setAnimalParade([...animalParade, '🦦'])}>🦦</button>
     
      </div>

    </section>
  );
}
