import React from 'react';
import { Card, Icon, Divider, Header } from 'semantic-ui-react';
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
        {
          employees.map((employee, index) => {
            return (
              <EmployeeCard
                employee={employee}
                key={index}
                index={index}
              />
            )
          })
        }
      </Card.Group>
    </div>
  )
}

export default Browse
