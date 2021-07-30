import React, { Component } from 'react'
// import Item from './components/List'
import 'antd-mobile/dist/antd-mobile.css';
import './App.css';
import Router from './router';



export default class App extends Component {
  componentDidMount() {

  }
  render() {
    return (
      <div>
        <Router />
      </div>
    )
  }
}

