import React from 'react';

export default function OpenSign({ isOpen, setIsOpen }) {
  return (
    <section>
      <p>The zoo is 
        <span>
          {isOpen ? 'OPEN' : 'CLOSED'}
        </span>
      </p>
      <div>
        <button onClick={() => setIsOpen(true)}>
          Open
        </button>
        <button onClick={() => setIsOpen(false)}>
          Closed
        </button>
      </div>
    </section>
  );
}
