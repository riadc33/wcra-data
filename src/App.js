import React, { useState } from 'react';
import Numeral from "numeral";

import logo from './logo.svg';
import './App.css';
function App() {
  const [counters, setCounters] = useState(0)
  const [valor, setValor] = useState(900152)

  const plus = () => {
    setCounters(counters + 1)
    setValor(valor + 52965)
  }
  const FormatAmount = (amount) => {
    if (!amount) return "$ 0"
    let digits = amount.toString().replaceAll(/\s/g, '');
    //console.log('digits: ', digits);
    return Numeral(parseInt(digits)).format('0,0').replace(/,/g, '.');
  }
  return (
    <div className="App">
      <button className="btn-plus" onClick={() => plus()}>
        <p style={{ fontWeight: 'bold', fontSize: '48px', color: 'white' }}>{counters}</p>

      </button>
      <p style={{ fontWeight: 'bold', fontSize: '48px', color: 'white' }}>{FormatAmount(valor)}</p>
    </div>
  );
}

export default App;
