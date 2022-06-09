import { useState } from 'react';
import './App.css';
// import { Boton } from './componente/botones';
// import Calculadora from './componente/Calculadora';

function App() {
  const [result, setResult] = useState("");
  const eventClick = (e) => {
    setResult(result.concat(e.target.name));
  }
  const clear = () => {
    setResult("");
  }
  const backspace = () => {
    setResult(result.slice(0, -1));
  }
  const calculate = () => {
      const operations = ['*', '/', '+','-'];
      for (let i = 0; i < operations.length; i++) {
        if (result.includes(operations[i])) {
          const number1 = result.slice(0, result.indexOf(operations[i]));
          const number2 = result.slice(result.indexOf(operations[i])+1, result.length);
          if (number2.includes('-') || number2.includes('*') || number2.includes('+') || number2.includes('/')) {
            setResult('Error');
          } else {
            switch (operations[i]) {
              case '*':
                setResult(String(Number(number1) * Number(number2)));
                break;
              case '+':
                setResult(String(Number(number1) + Number(number2)));
                break;
              case '-':
                setResult(String(Number(number1) - Number(number2)));
                break;
              case '/':
                setResult(String(Number(number1) / Number(number2)));
                break;
            
              default:
                console.log('Vacio');
                break;
            }
          }
        }
      }
  }
  /* Estudiar Props*/
  return (
    <>
        <div className='container'>
          <form>
            <input type="text" value={result}></input>
          </form>
          
          <div className='keypad'>
            <button className='highLight' onClick={clear} id="clear">Clear</button>
            <button className='highLight' onClick={backspace} id="backspace">C</button>
            <button className='highLight' name="/" onClick={eventClick}>&divide;</button>
            <button name="7" onClick={eventClick}>7</button>
            <button name="8" onClick={eventClick}>8</button>
            <button name="9" onClick={eventClick}>9</button>
            <button className='highLight' name="*" onClick={eventClick}>&times;</button>
            <button name="4" onClick={eventClick}>4</button>
            <button name="5" onClick={eventClick}>5</button>
            <button name="6" onClick={eventClick}>6</button>
            <button className='highLight' name="-" onClick={eventClick}>&ndash;</button>
            <button name="1" onClick={eventClick}>1</button>
            <button name="2" onClick={eventClick}>2</button>
            <button name="3" onClick={eventClick}>3</button>
            <button className='highLight' name="+" onClick={eventClick}>+</button>
            <button name="0" onClick={eventClick}>0</button>
            <button className='highLight' name="." onClick={eventClick}>.</button>
            <button className='highLight' onClick={calculate} id="result">=</button>
          </div>
        </div>
    </>

  );
}

export default App;
