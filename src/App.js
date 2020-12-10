import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

function App() {

  const [employees, getEmployee] = useState('');

  useEffect(() => {
    function getEmployees() {
      axios.get('https://randomuser.me/api/1.3?results=50')
    .then((response) => {
      const employeesReturned = response.data.results
      console.log(response.data.results[3])
      getEmployee(employeesReturned);
    })
    .catch((error) => {
      console.log(error);
    })}

    getEmployees();
  }, []);

  const extra = employee => {
    return (
      <a>
        <Icon name="flag outline"/>
        {employee.nat}
      </a>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>Meet our employees!</p>
        <Card.Group>
        {employees.length > 0 ?

          employees.map((employee, index) => {
            return (
              <Card key={index}>
                <Card.Content textAlign="left">
                  <Image
                    floated='right'
                    size='mini'
                    src={employee.picture.thumbnail}
                  />
                  <Card.Header>{employee.name.first} {employee.name.last}</Card.Header>
                </Card.Content>
                <Card.Content textAlign="left">
                  <Card.Meta>Located in {employee.location.city}</Card.Meta>
                  <Card.Description>
                    <Icon size="tiny" name="phone" />
                      {employee.phone}
                    <Icon size="tiny" name="mail" />
                      <p>{employee.email}</p>
                  </Card.Description>
                </Card.Content>
              </Card>
            )
          })
         :
        <p>there was a problem.  come back soon!</p>
        }
        </Card.Group>
      </header>
    </div>
  );
}

export default App;
