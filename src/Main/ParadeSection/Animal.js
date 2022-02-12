// import React from 'react';

import React, { Component } from 'react';

export default class Animal extends Component {
  render() {
    return (
      <span className='parade marquee'>{this.props.animal}</span>
    );
  }
}


// export default function Animal({ animal }) {
//   return (
//     <span className='parade marquee'>{animal}</span>
//   );
// }