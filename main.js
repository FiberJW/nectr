import Exponent from 'exponent';
import React, { Component } from 'react';
import App from './src/App';

class Nectr extends Component {
  render() {
    return (
      <App />
    );
  }
}

Exponent.registerRootComponent(Nectr);
