import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="screen">
        
        </div>
        <div className="buttons">
          <div className="column">
            <button>+</button>
            <button>7</button>
            <button>4</button>
            <button>1</button>
            <button>0</button>
          </div>
          <div className="column">
            <button>-</button>
            <button>8</button>
            <button>5</button>
            <button>2</button>
            <button>.</button>
          </div>
          <div className="column">
            <button>x</button>
            <button>9</button>
            <button>6</button>
            <button>3</button>
            <button>AC</button>
          </div>
          <div className="column-last">
            <button>÷</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
