import React from 'react';
import './Main.css';

export default function Main(props) {
  console.log(props);
  return (
    <main>
      <p>The zoo is {props.isOpen ? 'OPEN' : 'CLOSED'}
      </p>
      <div>
        <button onClick={() => props.setIsOpen(true)}>
          Open
        </button>
        <button onClick={() => props.setIsOpen(false)}>
          Closed
        </button>
      </div>
    </main>
  );
}
