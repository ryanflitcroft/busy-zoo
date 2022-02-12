// import React from 'react';
import './Header.css';

import React, { Component } from 'react';

export default class Header extends Component {
  render() {
    return (
      <header>
        <h1><span>Welcome to </span>{this.props.name}</h1>
      </header>
    );
  }
}


// export default function Header(props) {
//   return (
//     <header>
//       <h1><span>Welcome to </span>{props.name}</h1>
//     </header>
//   );
// }