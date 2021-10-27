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
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
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
