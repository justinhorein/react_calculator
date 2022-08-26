import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => (
  <div className="App">
    <Calculator/>
  </div>
);

function Calculator() {
  const [screen, setScreen] = useState("0");
  const [firstNum, setFirstNum] = useState("");
  const [operator, setOperator] = useState("");
  const [total, setTotal] = useState("");

  function handleNum(num) {
    let decimals = screen.split(".").length - 1;
    let len = screen.length;

    if (len > 16) {
      // do nothing
    }
    else if (decimals == "1" && num == "." && screen != total) {
      // do nothing
    }
    else if (screen == "0" && num == ".") {
      setScreen(screen + num);
    } 
    else if (screen == "0") {
      setScreen(num);
    }
    else if (screen == "0.") {
      setScreen(screen + num);
    }
    else if (screen == total) {
      if (num == ".") {
        setScreen("0.")
      }
      else {
        setScreen(num);
      }
    }
    else {
      setScreen(screen + num);
    }  
  }

  function handleOperator(op) {
    if (op == "AC") {
      setTotal("")
      setScreen("0");
      setFirstNum("");
      setOperator("");
    }
    else if (firstNum == "") {
      setTotal(screen);
      setFirstNum(screen);
      setScreen("0");
      setOperator(op);
    }
    else {
      if (op == "=") {
        let tot;
        if (operator == "+") {
          tot = (parseFloat(firstNum) + parseFloat(screen)).toString();
        }
        else if (operator == "-") {
          tot = (parseFloat(firstNum) - parseFloat(screen)).toString();
        }
        else if (operator == "x") {
          tot = (parseFloat(firstNum) * parseFloat(screen)).toString();
        }
        else if (operator == "÷") {
          tot = (parseFloat(firstNum) / parseFloat(screen)).toString();
        }

        if (tot.length > 16) {
          tot = tot.substring(0, 16);
        }

        setTotal(tot);
        setScreen(tot);
        setFirstNum(tot);
        setOperator("");
      }
      else {
        //  If equal sign was previously used
        if (operator == "") {
          setOperator(op);
        }
        else {
          let tot;
          if (operator == "+") {
            tot = (parseFloat(firstNum) + parseFloat(screen)).toString();
          }
          else if (operator == "-") {
            tot = (parseFloat(firstNum) - parseFloat(screen)).toString();
          }
          else if (operator == "x") {
            tot = (parseFloat(firstNum) * parseFloat(screen)).toString();
          }
          else if (operator == "÷") {
            tot = (parseFloat(firstNum) / parseFloat(screen)).toString();
          }

          if (tot.length > 16) {
            tot = tot.substring(0, 16);
          }

          setTotal(tot);
          setScreen(tot);
          setOperator(op);
          setFirstNum(tot);
        }     
      }
    }
  }

  return (
    <div className="calculator">
      <div className="screen">
        { screen }
      </div>
      <div className="buttons">
        <div className="column">
          <Button value="+" onClick={handleOperator}></Button>
          <Button value="7" onClick={handleNum}></Button>
          <Button value="4" onClick={handleNum}></Button>
          <Button value="1" onClick={handleNum}></Button>
          <Button value="0" onClick={handleNum}></Button>
        </div>
        <div className="column">
          <Button value="-" onClick={handleOperator}></Button>
          <Button value="8" onClick={handleNum}></Button>
          <Button value="5" onClick={handleNum}></Button>
          <Button value="2" onClick={handleNum}></Button>
          <Button value="." onClick={handleNum}></Button>
        </div>
        <div className="column">
          <Button value="x" onClick={handleOperator}></Button>
          <Button value="9" onClick={handleNum}></Button>
          <Button value="6" onClick={handleNum}></Button>
          <Button value="3" onClick={handleNum}></Button>
          <Button value="AC" onClick={handleOperator}></Button>
        </div>
        <div className="column-last">
          <Button value="÷" onClick={handleOperator}></Button>
          <Button value="=" onClick={handleOperator}></Button>
        </div>
      </div>
    </div>
  );
}

function Button({value, onClick}) {
  return (
    <button onClick={() => onClick(value)}>
      {value}
    </button>
  )
};

export default App;
