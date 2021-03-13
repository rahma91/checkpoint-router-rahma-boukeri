import './App.css';
import React from 'react'
import Home from './Home';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer';
import About from './components/About';
import HomePage from './components/HomePage';



function App() {

  return (
    <div className="App">
      <NavBar />
        <Switch>
           <Route exact path="/" component={HomePage} />
           <Route path="/movies" component={Home} />
           <Route path="/about" component={About} />
        </Switch>
      <Footer />
        
    </div>
  );
}

export default App;
