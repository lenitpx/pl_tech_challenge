import React from 'react';
import { Card, Image, Icon, List } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'

const EmployeeCard = ({employee, index}) => {
  return (
    <Card key={index} color="purple">
      <Card.Content textAlign="left">
        <Image
          floated='right'
          size='tiny'
          src={employee.picture.thumbnail}
        />
        <Card.Header>{employee.name.first} {employee.name.last}</Card.Header>
        <List>
          <List.Item>
            <List.Icon size="large" name={employee.gender}/>
            <List.Content>Nationality: {employee.nat}</List.Content>
          </List.Item>
        </List>
      </Card.Content>
      <Card.Content textAlign="left">
        <Card.Meta>
        <List>
        <List.Item>
          <List.Icon name='building' />
          <List.Content>{employee.location.city}</List.Content>
        </List.Item>
        </List>
        </Card.Meta>
        <Card.Description>
          <List>
            <List.Item>
              <List.Icon name='phone' />
              <List.Content>{employee.phone}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='mail' />
              <List.Content>{employee.email}</List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name='birthday cake' />
              <List.Content>{employee.dob.age}</List.Content>
            </List.Item>
          </List>
        </Card.Description>
      </Card.Content>
    </Card>
  )
}

export default EmployeeCard
