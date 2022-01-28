import React from 'react';
import './Main.css';
import OpenSign from './OpenSign';

export default function Main(props) {
  console.log(props);
  return (
    <main>
      <OpenSign isOpen={props.isOpen} setIsOpen={props.setIsOpen} />
    </main>
  );
}
