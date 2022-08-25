import logo from './logo.svg';
import './App.css';
import { useState } from 'react'

const App = () => (
  <div className="App">
    <Calculator/>
  </div>
);

function Calculator() {
  const [screen, setScreen] = useState(0);

  return (
    <div className="calculator">
      <div className="screen">
        { screen }
      </div>
      <div className="buttons">
        <div className="column">
          <Button value="+"></Button>
          <Button value="7"></Button>
          <Button value="4"></Button>
          <Button value="1"></Button>
          <Button value="0"></Button>
        </div>
        <div className="column">
          <Button value="-"></Button>
          <Button value="8"></Button>
          <Button value="5"></Button>
          <Button value="2"></Button>
          <Button value="."></Button>
        </div>
        <div className="column">
          <Button value="x"></Button>
          <Button value="9"></Button>
          <Button value="6"></Button>
          <Button value="3"></Button>
          <Button value="AC"></Button>
        </div>
        <div className="column-last">
          <Button value="÷"></Button>
          <Button value="="></Button>
        </div>
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <button>
      {props.value}
    </button>
  )
};

export default App;
