//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react'
// import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';

// import NewsItem from './components/NewsItem';

export default class App extends Component {

  state ={
    progress :0
  }

  setProgress=(progress)=>{
    this.setState({progress : progress})
  }
  render() {
    return (
      <div>

        <Router>

          <Navbar/>

          <LoadingBar
          color='#F75D59'
          progress={this.state.progress}
          height={7}
          // loaderSpeed={200}
          // onLoaderFinished={() => setProgress(0)}
          />



        <Switch>

          <Route exact path='/'><News setProgress={this.setProgress} key='main' category='general'/></Route>
          <Route exact path='/Business'><News setProgress={this.setProgress} key='bs' category='business'/></Route>
          <Route exact path='/Entertainment'><News setProgress={this.setProgress} key='ent' category='entertainment'/></Route>
          <Route exact path='/General'><News setProgress={this.setProgress} key='gen' category='general'/></Route>
          <Route exact path='/Science'><News setProgress={this.setProgress} key='sci' category='science'/></Route>
          <Route exact path='/Sports'><News setProgress={this.setProgress} key='spt' category='sports'/></Route>
          <Route exact path='/Technology'><News setProgress={this.setProgress} key='health' category='technology'/></Route>
          <Route exact path='/Health'><News setProgress={this.setProgress} key='health' category='health'/></Route>
          <Route exact path='/about'><About/> </Route>
            
       </Switch>


        </Router>


        
      </div>
      
    )
  }
}
