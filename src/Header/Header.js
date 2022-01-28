import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <header>
      <h1><span>Welcome to </span>{props.name}</h1>
    </header>
  );
}