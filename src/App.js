import './App.css';
import React, { Component } from 'react';

class App extends Component{
  //we create the constructor and the state
  constructor(props){
    super(props);
    this.state = {
      counter: 0
    }
  }
//Create the functions of the app to change the state by using setState
  increment = () => {this.setState({counter: this.state.counter + 1})}
  decrement = () => {this.setState({counter: this.state.counter - 1})}
  reset = () => {this.setState({counter: this.state.counter = 0})}
  incrementfive = () => {this.setState({counter: this.state.counter + 5})}
  decrementfive = () => {this.setState({counter: this.state.counter -5})}
  incrementteen = () => {this.setState({counter: this.state.counter + 10})}
  decrementten = () => {this.setState({counter: this.state.counter -10})}

//Second we build the elemnt of the app
  render(){
    return(
      <div className='App'>
        <h1 style={{color: 'white', fontSize: '5rem', alignItems: 'center'}}>{this.state.counter}</h1>
        <div className='counter'>
        <button className='btn' onClick={this.incrementteen}>+10</button>
        <button className='btn' onClick={this.incrementfive}>+5</button>
        <button className='btn' onClick={this.increment}>+</button>
        <button className='btn' onClick={this.reset}>Rest</button>
        <button className='btn' onClick={this.decrement}>-</button>
        <button className='btn' onClick={this.decrementfive}>-5</button>
        <button className='btn' onClick={this.decrementten}>-10</button>
        </div>
      </div>
    )
  }

}

export default App