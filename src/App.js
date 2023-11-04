import logo from './logo.svg';
import './App.css';
import rslogo from './rs2.png';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={rslogo} className="App-logo" alt="logo" />
        <h3 className="App-founder">
          Founders:
        </h3>
        <p className="App-naveen-name">
          Rajapandian Chellimuthu 
          <br/>
          Manigandan Sivaramakrishnan
          <br/>
          Naveen Srinivasan
          <br/>
        </p>
      </header>
    </div>
  );
}

export default App;
