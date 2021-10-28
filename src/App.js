import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import background from "./assets/Boston_Celtics.jpeg";

import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListStartersComponent from './components/ListStartersComponent';

import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import AddStarterComponent from './components/AddStarterComponent';
import UpdateStarter from './components/UpdateStarter';
import DeleteStarter from './components/DeleteStarter';
import ViewStarter from './components/ViewStarter';


function App() {
  return (
    // this Bootstarp code only filled half the screen length. I left the code for reference later  on, incase I wanted to try again to fill the screen using Bootstrap instead of CSS
    <div id= "BG" style={{ backgroundImage: `url(${background})`}} > 
      <Router>
          <HeaderComponent />
          {/* the color green using Bootstrap. Celtics image made it hard to see Starters info */}
          <div className="container p-3 mb-2 bg-success text-black">
            <Switch> 
              <Route path = "/" exact component = {ListStartersComponent}></Route>
              <Route path = "/starters" component = {ListStartersComponent}></Route>
              <Route path = "/addstarter" component = {AddStarterComponent}></Route>
              <Route path = "/update-starter/:id" component = {UpdateStarter}></Route>
              <Route path = "/delete-starter/:id" component = {DeleteStarter}></Route>
              <Route path = "/view-starter/:id" component = {ViewStarter}></Route>
              {/* <ListStartersComponent /> */}
            </Switch>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
