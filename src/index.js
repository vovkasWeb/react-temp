import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {
	constructor(props) {
	  super(props);
	  this.state = {
		 counter: this.props.counter
	  }
	}
	
	incCounter = () => {
	  if (this.state.counter < 50) {
		 this.setState(state => ({
			counter: state.counter + 1
		 }))
	  }
	}
	
	decCounter = () => {
	  if (this.state.counter > -50) {
		 this.setState(state => ({
			counter: state.counter - 1
		 }))
	  }
	}
	
	rndCounter = () => {
	  this.setState({
		 counter: +(Math.random() * (50 - -50) + -50).toFixed(0)
	  })
	}
	
	resetCounter = () => {
	  this.setState({
		 counter: this.props.counter
	  })
	}
	
	render() {
	  const {counter} = this.state;
	  
	  return (
		 <div className="app">
			<div className="counter">{counter}</div>
			<div className="controls">
			  <button onClick={this.incCounter}>INC</button>
			  <button onClick={this.decCounter}>DEC</button>
			  <button onClick={this.rndCounter}>RND</button>
			  <button onClick={this.resetCounter}>RESET</button>
			</div>
		 </div>
	  )
	}
 }
 
 ReactDOM.render(<App counter={0}/>, document.getElementById('app'));