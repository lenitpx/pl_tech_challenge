import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import 'semantic-ui-css/semantic.min.css'
import { Segment, Loader } from 'semantic-ui-react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Browse from './Browse/Browse'
import Sort from './Sort/Sort'

function App() {

  const [employees, getEmployee] = useState('');

  useEffect(() => {
    function getEmployees() {
      axios.get('https://randomuser.me/api/1.3?results=400')
    .then((response) => {
      const employeesReturned = response.data.results
      getEmployee(employeesReturned);
    })
    .catch((error) => {
      console.log(error);
    })}

    getEmployees();
  }, []);

  return (
    <div className="App">
      <HashRouter>
        <header className="App-header">
          <h1><NavLink exact activeClassName="active" to="/">Employee Directory</NavLink></h1>
          <ul>
            <li><NavLink exact activeClassName="active" to="/">Browse</NavLink></li>
            <li><NavLink exact activeClassName="active" to="/sort">Sort</NavLink></li>
          </ul>
        </header>
      {employees.length > 0 ?
        <div className="App-body">
          <Route exact path="/" render={() => (
            <Browse employees={employees} />
          )}/>
          <Route exact path="/sort" render={() => (
            <Sort employees={employees} />
          )}/>
        </div> :
        <Segment>
          <Loader active inline="centered" size="large">Loading</Loader>
        </Segment>
      }
      </HashRouter>
    </div>
  );
}

export default App;
