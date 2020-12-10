import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Card, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function App() {

  const [employee, getEmployee] = useState('');

  useEffect(() => {
    function getTheThing() {
      axios.get('https://randomuser.me/api/1.3?results=50')
    .then((response) => {
      const employeeRando = response.data.results
      console.log(response.data.results[3])
      getEmployee(employeeRando);
    })
    .catch((error) => {
      console.log(error);
    })}

    getTheThing();
  }, {});

  return (
    <div className="App">
      <header className="App-header">
        <p>Meet our employees!</p>
        {employee.length > 0 ?
        <Card

          header='its cha boi'
        /> :
        <p>there was a problem.  come back soon!</p>
        }
      </header>
    </div>
  );
}

export default App;
