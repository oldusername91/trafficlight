import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Light extends React.Component {

  isActive(){
    return this.props.on===true ? 'light' : 'light off';
  }

  render(color) {
    return (
      <div id={this.props.color} class={this.isActive()} onClick={this.props.onClick} >
      </div>
    );
  }
}


class TrafficLight extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      green : true,
      yellow : false,
      red : false,
    };
  }

  goGreen() {
    this.setState({green: true, red: false, yellow: false})
  }

  goRed() {
    this.setState({yellow: true, green: false, red: false})
    setTimeout(function() { this.setState({green: false, yellow: false, red: true}); }.bind(this), 2000);
  }


  render() {
    return (
      <div className="trafficlight" >
        <Light color={'green'}  on={this.state.green}  onClick={() => this.goGreen()} />
        <Light color={'yellow'} on={this.state.yellow} />
        <Light color={'red'}    on={this.state.red}    onClick={() => this.goRed()}/>
      </div>
    );
  }
}


class Controls extends React.Component {
  render() {
    return (
      <div id="Controls" >
        <GreenButton />
        <RedButton />
      </div>
    );
  }
}


class GreenButton extends React.Component {
  render() {
    return (
      <div id="greenbutton" ><TinyCircle color={'green'} />Green</div>
    );
  }
}


class RedButton extends React.Component {
  render() {
    return (
      <div id="redbutton" ><TinyCircle color={'red'} />Red</div>
    );
  }
}


class TinyCircle extends React.Component {
  render(color) {
    return (
      <span class="tinycircle" style={{marginRight: '5px', display: 'inline-block', height: '25px', width: '25px', backgroundColor: this.props.color, borderRadius: '15px'}}></span>
    );
  }
}

// ========================================

ReactDOM.render(
  <div>
  <TrafficLight />
  </div>,
  document.getElementById('root')
);
