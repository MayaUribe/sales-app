import React, { Component } from 'react';
import './App.css';
import Home from './pages/home';
import Footer from './components/footer';
import { Route, Switch } from 'react-router-dom';
import Product from './pages/product';
import Contact from './pages/contact';
import HeaderMenu from './components/headerMenu';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeaderMenu />
        <div className='main-content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/product/:id' component={Product} />
            <Route path='/contacto' component={Contact} />
          </Switch>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
