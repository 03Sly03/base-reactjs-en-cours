import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';
import Card from './Card.js';
import Person from './Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card />
        <Card />

        <h1>Bienvenue</h1>
        <Counter text_btn="Boutton numéro 1"/>
        <Counter text_btn="Boutton numéro 2"/>
        <Counter text_btn="Boutton numéro 3"/>
        <Counter text_btn="Boutton numéro 4"/>

        <Person personName="Jean-jacque Bourdin"/>
        <Person personName="Claire Chazal"/>
      </div>

      
    );
  }
}

export default App;

