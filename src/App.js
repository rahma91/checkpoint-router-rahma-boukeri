import './App.css';
import React from 'react'
import Home from './Home';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router';
import Footer from './components/Footer';
import About from './components/About';
import HomePage from './components/HomePage';
import movie from './components/movie';



function App() {

  return (
    <div className="App">
      <NavBar />
        <Switch>
           <Route exact path="/" component={HomePage} />
           <Route path="/movies" component={Home} />
           <Route path="/about" component={About} />
           <Route path="/movie/:id" component={movie} />
        </Switch>
      <Footer />
        
    </div>
  );
}

export default App;
