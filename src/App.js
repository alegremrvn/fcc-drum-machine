import React from 'react';
import './App.css';
import bell from './service-bell_daniel_simion.mp3';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
    this.handleQ = this.handleQ.bind(this);
    this.handleW = this.handleW.bind(this);
    this.handleE = this.handleE.bind(this);
    this.handleA = this.handleA.bind(this);
    this.handleS = this.handleS.bind(this);
    this.handleD = this.handleD.bind(this);
    this.handleZ = this.handleZ.bind(this);
    this.handleX = this.handleX.bind(this);
    this.handleC = this.handleC.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleQ() {
    document.getElementById('Q').play();
    this.setState({
      name: "Q"
    });
  }

  handleW() {
    document.getElementById('W').play();
    this.setState({
      name: "W"
    });
  }

  handleE() {
    document.getElementById('E').play();
    this.setState({
      name: "E"
    });
  }

  handleA() {
    document.getElementById('A').play();
    this.setState({
      name: "A"
    });
  }

  handleS() {
    document.getElementById('S').play();
    this.setState({
      name: "S"
    });
  }

  handleD() {
    document.getElementById('D').play();
    this.setState({
      name: "D"
    });
  }

  handleZ() {
    document.getElementById('Z').play();
    this.setState({
      name: "Z"
    });
  }

  handleX() {
    document.getElementById('X').play();
    this.setState({
      name: "X"
    });
  }

  handleC() {
    document.getElementById('C').play();
    this.setState({
      name: "C"
    });
  }

  handleKeyPress(event) {
    switch (event.keyCode) {
      case 81:
        this.handleQ();
        break;
      case 87:
        this.handleW();
        break;
      case 69:
        this.handleE();
        break;
      case 65:
        this.handleA();
        break;
      case 83:
        this.handleS();
        break;
      case 68:
        this.handleD();
        break;
      case 90:
        this.handleZ();
        break;
      case 88:
        this.handleX();
        break;
      case 67:
        this.handleC();
        break;
      default:
        break;
    }
  }

  componentDidMount() {
    document.addEventListener("keydown",this.handleKeyPress)
  }

  render() {
    return (
      <div id="drum-machine" style={{marginTop: "100px"}}>
        <div id="display">{this.state.name}</div>
        <button className="drum-pad" id="buttonQ"  onClick={this.handleQ}>Q
          <audio className="clip" id='Q' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonW" onClick={this.handleW}>W
          <audio className="clip" id='W' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonE" onClick={this.handleE}>E
          <audio className="clip" id='E' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonA" onClick={this.handleA}>A
          <audio className="clip" id='A' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonS" onClick={this.handleS}>S
          <audio className="clip" id='S' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonD" onClick={this.handleD}>D
          <audio className="clip" id='D' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonZ" onClick={this.handleZ}>Z
          <audio className="clip" id='Z' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonX" onClick={this.handleX}>X
          <audio className="clip" id='X' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
        <button className="drum-pad" id="buttonC" onClick={this.handleC}>C
          <audio className="clip" id='C' src={bell}>The browser does not suport the <code>audio</code>element</audio>
        </button>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <DrumMachine />
      
    </div>
  );
}

export default App;
