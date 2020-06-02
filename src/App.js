import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './composants/interface/Header';
import List from './composants/List';
import { Provider } from './context'
import AddContact from './composants/contact/AddContact';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import APropos from './composants/page/APropos';
import Erreur from './composants/page/Erreur';



class App extends Component {
  render() {
    
    return (
      <Provider>
      <Router>
      <div className="App">
        <Header/>
         <div className="container">
         <Switch>
          <Route exact path="/ajoute" component={AddContact}/>
          <Route exact path="/liste" component={List}/>
          <Route exact path="/" component={List}/>
          <Route exact path="/apropos" component={APropos}/>
          <Route  component={Erreur}/>
         </Switch> 
         </div>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
