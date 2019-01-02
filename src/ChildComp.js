import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import storageComp from './storageComp'

class ChildComp extends Component {
  state = {
    name:window.localStorage.name || "no name",
    selectType: "local",
    key: '',
    retrieved: ''
  }

  render() {
    return (
      <div className="App">
          Stored Item:{this.state.name} 
          <br/>
          Storage Type:{this.props.storageType}
          <br/>
          <input onChange={(e)=> this.setState({name: e.target.value})} placeholder="item" value={this.state.name}/>
          <br/>
          <input onChange={(e)=> this.setState({key: e.target.value})} placeholder='key' value={this.state.key}/>
          <br/>
          <button onClick={()=> this.props.setItem(this.state.key, this.state.name)}>Add item</button>
          <button onClick={()=> this.props.removeItem(this.state.key)}>Remove item</button>
          <button onClick={()=> this.setState({retrieved: this.props.getItem(this.state.key)})}>Get item</button>
          <br/>
          Item Retrieved {this.state.retrieved} 

      </div>
    );
  }
}


export default storageComp(ChildComp, "local");