import React from 'react';
import './FightSection.css';

export default function FightSection({ lionSize, 
  setLionSize, 
  tigerSize, 
  setTigerSize }) {
  return (
    <section className='fight'>
      <div>
        <span style={{ fontSize: `${lionSize}em` }}>🦁</span>
        <button onClick={() => setLionSize(lionSize + 0.25)}>Bigger</button>
        <button onClick={() => setLionSize(lionSize - 0.25)}>Smaller</button>        
      </div>

      <div>
        <span style={{ fontSize: `${tigerSize}em` }}>🐯</span>
        <button onClick={() => setTigerSize(tigerSize + 0.25)}>Bigger</button>
        <button onClick={() => setTigerSize(tigerSize - 0.25)}>Smaller</button>
      </div>
    </section>
  );
}
