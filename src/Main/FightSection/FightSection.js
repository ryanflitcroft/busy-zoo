import React from 'react';
import './FightSection.css';

export default function FightSection({ lionSize, 
  setLionSize, 
  tigerSize, 
  setTigerSize }) {
  return (
    <section className='fight'>
      <div>
        <span style={{ fontSize: `${lionSize}em` }}>🐜</span>
        <span style={{ fontSize: `${tigerSize}em` }}>🪰</span>
      </div>

      <div>
        <button onClick={() => setLionSize(lionSize + 0.25)}>🔬 ➕</button>
        <button onClick={() => setLionSize(lionSize - 0.25)}>🔬 ➖</button>

        <button onClick={() => setTigerSize(tigerSize + 0.25)}>🔬 ➕</button>
        <button onClick={() => setTigerSize(tigerSize - 0.25)}>🔬 ➖</button>
      </div>
    </section>
  );
}