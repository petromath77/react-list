import React from 'react';
import './App.css';

// Routing
import { Route, Switch } from 'react-router-dom';

//Components
import MenuHeader from './components/MenuHeader/MenuHeader';
import Home from './components/Home/Home';
import About from './components/About/About';
import List from './components/List/List';
import ProductDetail from './components/List/ProductDetail/ProductDetail';

function App() {
  return (
    <div className="App">
      <MenuHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/list/:name" component={ProductDetail} />
        <Route path="/list" component={List} />
        <Route path="/about" component={About}/>
      </Switch>
    </div>
  );
}

export default App;
