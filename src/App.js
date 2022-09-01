import React, { Component } from 'react';
import AudioAnalyser from './audioAnalyser';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      audio: null
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }
  async getMicrophone(){
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });
  }

  toggleMicrophone(){
    if(this.state.audio){
      this.stopMicrophone();
    }else{this.getMicrophone();}
  }

  render() {
    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.toggleMicrophone}>{this.state.audio ? 'Stop Microphone' : "Get microphone input"}</button>
        </div>
        {this.state.audio ? <AudioAnalyser audio={this.state.audio}/> : ''}
      </div>
    );
  }
}

export default App;
