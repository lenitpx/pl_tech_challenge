import React from 'react';
import { Card, Icon, Divider, Header, Segment, Loader } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import EmployeeCard from '../Employee/EmployeeCard'

const Browse = ({employees}) => {
  return (
    <div className="browse-employees">
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='browser' />
            Browse
        </Header>
      </Divider>
      <Card.Group>
        {employees.length > 0 ?
          employees.map((employee, index) => {
            return (
              <EmployeeCard
                employee={employee}
                key={index}
                index={index}
              />
            )
          })
         :
        <Segment>
          <Loader active inline="centered" size="large">Loading</Loader>
        </Segment>
        }
      </Card.Group>
    </div>
  )
}

export default Browse
