import logo from './logo.svg';
import './App.css';
import AddEvents from './components/AddEvents';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListEvents from './components/ListEvents';

function App() {
  return (
    <div>

    <Router>
   
          <Switch>  
          <Route exact path = "/" component = {ListEvents}></Route>
      <Route path = "/events" component= {ListEvents}></Route>
      <Route path = "/add-event" component= {AddEvents} ></Route>
      <Route path = "/edit-event/:id" component = {AddEvents}></Route>
      
          </Switch>
         
   </Router> 
   </div>
  );
}

export default App;
