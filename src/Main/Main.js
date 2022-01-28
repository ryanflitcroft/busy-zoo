import React from 'react';
import './Main.css';

export default function Main(props) {
  console.log(props);
  return (
    <main>
      <section>
        <p>The zoo is 
          <span>
            {props.isOpen ? 'OPEN' : 'CLOSED'}
          </span>
        </p>
        <div>
          <button onClick={() => props.setIsOpen(true)}>
            Open
          </button>
          <button onClick={() => props.setIsOpen(false)}>
            Closed
          </button>
        </div>
      </section>
    </main>
  );
}
