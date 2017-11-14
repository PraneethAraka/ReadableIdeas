import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      backend: 'backend-data'
    }
  }

  componentDidMount() {
    const url = `${process.env.REACT_APP_BACKEND}/categories`;
    console.log('fetching from url', url);
    fetch(url, { headers: { 'Authorization': 'whatever-you-want' },
                 credentials: 'include' } )
      .then( (res) => { return(res.text()) })
      .then((data) => {
        this.setState({backend:data});
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Ideas</h2>
        </div>
        <p className="App-intro">
          Share your thoughts and enlighten the others.
        </p>
        <Route exact path = "/" render= {() => (
      	<p>
          Talking to the backend yields these categories: <br/>
          {this.state.backend}
        </p>
      )}
      />
      </div>
    );
  }
}

export default App;
