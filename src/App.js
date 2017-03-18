import React, { Component } from 'react';

import { connect } from 'react-redux';

import { listAllCities } from './actions/get-cityList';
import './App.css';

class App extends Component {
	ComponentDidMount() {
		this.props.listAllCities();
	}

  render() {
  	console.log(this.props);
    return (
      <h1>hello</h1>
    );
  }
}

function mapStateToProps(state) {
return state;
}

export default connect(mapStateToProps, {
  listAllCities
})(App);
