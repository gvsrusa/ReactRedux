// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import React, { Component } from 'react';
// import { Stoplight } from './stoplight';
// import { Buttons } from './buttons';

// export default class App extends Component {
//   render() {
//     return(
//       <div>
//         <Stoplight store={this.props.store} />
//         <Buttons   store={this.props.store} />
//       </div>
//     )
//   }
// }


import React, { Component } from 'react';
import { StoplightContainer } from './stoplight-container';
import { ButtonContainer } from './button-container';

export class App extends Component {
  render() {
    return(
      <div>
        <StoplightContainer store={this.props.store}/>
        <ButtonContainer store={this.props.store}/>
      </div>
    )
  }
}