// import React from 'react';
import './OpenSign.css';

import React, { Component } from 'react';
export default class OpenSign extends Component {
  render() {
    console.log('||isOpen', this.props.isOpen);
    return (
      <section className='sign'>
        <p>The zoo is {this.props.isOpen ? '🌞' : '🌜'}
          <span>
            {this.props.isOpen ? 'OPEN' : 'CLOSED'}
          </span>
        </p>
        <div>
          {/* FIXME: how do you set state this state??  */}
          <button className={`${this.props.isOpen ? 'hidden' : ''}`} onClick={() => this.setState({ isOpen: true })}>
          Open the zoo
          </button>
          <button className={`${!this.props.isOpen ? 'hidden' : ''}`} onClick={() => this.setState({ isOpen: false })}>
          Close the zoo
          </button>
        </div>
      </section>
    );
  }
}


// export default function OpenSign({ isOpen, setIsOpen }) {
//   return (
//     <section className='sign'>
//       <p>The zoo is {isOpen ? '🌞' : '🌜'}
//         <span>
//           {isOpen ? 'OPEN' : 'CLOSED'}
//         </span>
//       </p>
//       <div>
//         <button className={`${isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(true)}>
//           Open the zoo
//         </button>
//         <button className={`${!isOpen ? 'hidden' : ''}`} onClick={() => setIsOpen(false)}>
//           Close the zoo
//         </button>
//       </div>
//     </section>
//   );
// }