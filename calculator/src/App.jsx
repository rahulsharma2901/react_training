import React, { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Keypad from './Components/Keypad';
import { useEffect } from 'react';

const usedKeys = [
  67, 8, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 13, 190, 187, 189, 191, 56, 53
]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const operators = ["+", "-", "%", "*", "/"]

function App() {
  const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem("calculator-mode")) || false);
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState(JSON.parse(localStorage.getItem("calculator-history")) || []);
  const last = expression.slice(-1);

  const handleKeyPress = (keyCode, key) => {
    if (!keyCode) return;

    if (!usedKeys.includes(keyCode)) return;

    if (numbers.includes(key)) {
      if (key === "0" && expression.length === 0) return;
      calculateRes(expression + key);
      setExpression(expression + key);
      console.log("Number", key);
    }
    else if (operators.includes(key)) {
      if (!expression) return;
      if (operators.includes(last)) return;
      if (last === ".") return;

      setExpression(expression + key);
      console.log("Operator", key);
    }
    else if (key === ".") {
      if (!expression) return;
      if (!numbers.includes(last)) return;
      setExpression(expression + key);
      console.log("Point")
    }
    else if (keyCode === 13) {
      calculateRes(expression)
      console.log("Enter");
      const tempHistory = [...history];
      if (tempHistory.length > 10) tempHistory = tempHistory.splice(0, 1);
      tempHistory.push(expression);
      setHistory(tempHistory);
    }
    else if (keyCode === 8) {
      if (!expression) return;
      setExpression(expression.slice(0, -1));
      calculateRes(expression.slice(0, -1));
      console.log("Delete");
    }
    else if (keyCode === 67) {
      setExpression(expression.slice(0, 0));
      calculateRes(result.slice(0, 0));
      console.log("Clear");
    }
    console.log(keyCode, key);
  }

  const calculateRes = (expr) => {
    if (!expr) {
      setResult("");
      return;
    }
    const last = expr.slice(-1);
    if (!numbers.includes(last)) expr = expr.slice(0, -1);
    const res = eval(expr).toFixed() + "";
    setResult(res);

  }

  useEffect(() => {
    localStorage.setItem("calculator-mode", JSON.stringify(isDark))
  }, [isDark])

  useEffect(() => {
    localStorage.setItem("calculator-history", JSON.stringify(history))
  }, [history])

  return (
    <div className='app'
      tabIndex='0'
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.key)}
      data-theme={isDark ? "dark" : ""}>
      <div className='app_calculator'>
        <div className='calculator_navbar'>
          <div className='navbar_toggle' onClick={() => setIsDark(!isDark)}>

            <div className={`toggle_circle ${isDark ? 'circle_active' : ''}`} />
          </div>
        </div>

        <Display expression={expression} result={result} history={history} />
        <Keypad keyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;