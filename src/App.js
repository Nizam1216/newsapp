
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  pageSize= 18;
  
  render() {
   
    return (
      <div>
        <Router>
       
       <NavBar />
       <Switch>
          <Route exact path="/"><News key={'general'} pageSize = {this.pageSize} country ="in" category={'general'} /></Route>
          <Route exact path="/business"><News key="business" pageSize = {this.pageSize} country ="in" category={'business'} /></Route>
          <Route exact path="/entertainment"><News key="Entertainment" pageSize = {this.pageSize} country ="in" category={'entertainment'} /></Route>
          <Route exact path="/general"><News  pageSize = {this.pageSize} country ="in" category={'general'} /></Route>
          <Route exact path="/health"><News key="health" pageSize = {this.pageSize} country ="in" category={'health'} /></Route>
          <Route exact path="/science"><News key="science" pageSize = {this.pageSize} country ="in" category={'science'} /></Route>
          <Route exact path="/sports"><News key="sports" pageSize = {this.pageSize} country ="in" category={'sports'} /></Route>
          <Route exact path="/Technology"><News key="Technology" pageSize = {this.pageSize} country ="in" category={'Technology'} /></Route>
          <About /> 
        </Switch>

       </Router>
      </div>
    )
  }
}
