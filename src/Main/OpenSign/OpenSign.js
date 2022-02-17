import React from 'react';
import './OpenSign.css';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <section className='sign'>
      <p>The zoo is {isOpen ? '🌞' : '🌜'}
        <span>
          {isOpen ? 'OPEN' : 'CLOSED'}
        </span>
      </p>
      <div>
        {
          !isOpen
            && <button onClick={() => setIsOpen(true)}>
          Open the zoo
            </button>
        }
        {
          isOpen
            && <button onClick={() => setIsOpen(false)}>
            Close the zoo
            </button>
        }
      </div>
    </section>
  );
}