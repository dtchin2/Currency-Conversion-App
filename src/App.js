import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

function App() {
  const [amountConverted, setAmountConverted] = useState('Exchange Rate');

  return (
    <div className="App background">
      <h2>Currency Converter</h2>
      <h3>{amountConverted}</h3>
      <br/>
      <input type='number' id='convertAmountInput' className='convert_amount_input' placeholder='Enter Amount to Convert' min={'0'}/>
      <br/>
      <label>From</label>
      <select id='fromUnit' className='to_from_selects'>
        <option value={'USD'}>USD</option>
        <option value={'EURO'}>EURO</option>
      </select>
      <label>To</label>
      <select id='toUnit' className='to_from_selects'>
        <option value={'USD'}>USD</option>
        <option value={'EURO'}>EURO</option>
      </select>
      <br/>
      <Button className='convert_button' onClick={() => setAmountConverted(getConvertedAmount)}>Convert</Button>
    </div>
  );
}

function getConvertedAmount(){
  var usdtoEuroExchangeRate = 0.90918882
  var eurotoUSDExchangeRate = 1.0995797
  var amountToConvert = document.getElementById('convertAmountInput').value;

  var fromUnit = document.getElementById('fromUnit').value
  var toUnit = document.getElementById('toUnit').value;

  if(fromUnit === toUnit){
    alert("Conversion Values Cannot be same.")
    return 'Enter Amount to Convert';
  }
  
  var exchangeRate = 0.0;
  if(fromUnit === 'USD'){
    exchangeRate = usdtoEuroExchangeRate;
  }else if(fromUnit === 'EURO'){
    exchangeRate = eurotoUSDExchangeRate;
  }

  var converedAmount = amountToConvert * exchangeRate;

  return converedAmount + " " + toUnit;
}

export default App;
