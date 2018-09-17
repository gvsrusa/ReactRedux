// import React, { Component } from 'react';
// import { goAction, cautionAction, stopAction } from './actions';

// export class Buttons extends Component {
//   componentWillMount() {
//     this.props.store.subscribe(() => {
//       this.forceUpdate();
//     });
//   }

//   render() {
//     const state = this.props.store.getState();

//     return(
//       <div style={{textAlign: 'center'}}>
//         <button onClick={() => {this.props.store.dispatch(goAction)}}
//                 disabled={state === 'GO' || state === 'CAUTION'}
//                 style={{cursor: 'pointer'}}>
//           Go
//         </button>

//         <button onClick={() => {this.props.store.dispatch(cautionAction)}}
//                 disabled={state === 'CAUTION' || state === 'STOP'}
//                 style={{cursor: 'pointer'}}>
//           Caution
//         </button>

//         <button onClick={() => {this.props.store.dispatch(stopAction)}}
//                 disabled={state === 'STOP' || state === 'GO'}
//                 style={{cursor: 'pointer'}}>
//           Stop
//         </button>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react';

export const Buttons = ({
  go,
  caution,
  stop,
  lightStatus
}) => {
  return(
    <div style={{textAlign: 'center'}}>
      <button onClick={go}
              disabled={lightStatus == 'GO' || lightStatus == 'CAUTION'}
              style={{cursor: 'pointer'}}>
        Go
      </button>

      <button onClick={caution}
              disabled={lightStatus == 'CAUTION' || lightStatus == 'STOP'}
              style={{cursor: 'pointer'}}>
        Caution
      </button>

      <button onClick={stop}
              disabled={lightStatus == 'STOP' || lightStatus == 'GO'}
              style={{cursor: 'pointer'}}>
        Stop
      </button>
    </div>
  )
}