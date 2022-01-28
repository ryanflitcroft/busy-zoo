import React from 'react';
import './Main.css';
import OpenSign from './OpenSign';
import FightSection from './FightSection/FightSection';
import ParadeSection from './ParadeSection/ParadeSection';

export default function Main(props) {
  console.log(props);
  return (
    <main>
      <OpenSign isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
      <FightSection lionSize={props.lionSize}
        setLionSize={props.setLionSize}
        tigerSize={props.tigerSize}
        setTigerSize={props.setTigerSize}/>
      <ParadeSection animalParade={props.animalParade}
        setAnimalParade={props.setAnimalParade} />
    </main>
  );
}
