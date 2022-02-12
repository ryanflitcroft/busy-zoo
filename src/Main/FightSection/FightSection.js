// import React from 'react';
import './FightSection.css';

import React, { Component } from 'react';

export default class FightSection extends Component {
  render() {
    console.log('||tiger', this.props.tigerSize, 'lion', this.props.lionSize);
    return (
      <section className='fight'>
        <div>
          <span style={{ fontSize: `${this.props.lionSize}em` }}>🐜</span>
          <span style={{ fontSize: `${this.props.tigerSize}em` }}>🪰</span>
        </div>
      
        <div>
          {/* FIXME: how tf do you update state in rcc?? */}
          <button onClick={() => this.props.setState(this.props.lionSize + 0.25)}>🔬 ➕</button>
          <button onClick={() => this.props.setState(this.props.lionSize - 0.25)}>🔬 ➖</button>
      
          <button onClick={() => this.props.setState(this.props.tigerSize + 0.25)}>🔬 ➕</button>
          <button onClick={() => this.props.setState(this.props.tigerSize - 0.25)}>🔬 ➖</button>
        </div>
      </section>
    );
  }
}


// export default function FightSection({ lionSize, 
//   setLionSize, 
//   tigerSize, 
//   setTigerSize }) {
//   return (
//     <section className='fight'>
//       <div>
//         <span style={{ fontSize: `${lionSize}em` }}>🐜</span>
//         <span style={{ fontSize: `${tigerSize}em` }}>🪰</span>
//       </div>

//       <div>
//         <button onClick={() => setLionSize(lionSize + 0.25)}>🔬 ➕</button>
//         <button onClick={() => setLionSize(lionSize - 0.25)}>🔬 ➖</button>

//         <button onClick={() => setTigerSize(tigerSize + 0.25)}>🔬 ➕</button>
//         <button onClick={() => setTigerSize(tigerSize - 0.25)}>🔬 ➖</button>
//       </div>
//     </section>
//   );
// }