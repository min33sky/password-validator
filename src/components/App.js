import React, { Component } from 'react';
import { Password } from 'components/Password';

class App extends Component {
  render() {
    return (
      <Password
        upperCase={true}
        lowerCase={true}
        special={true}
        number={true}
        over6={true}
      />
    );
  }
}

export default App;
