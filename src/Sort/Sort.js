import React, {useState, useEffect} from 'react';
import { Card, Divider, Header, Icon, Menu, Dropdown } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import EmployeeCard from '../Employee/EmployeeCard'

const Sort = ({employees}) => {

  const [employeeGroup, setEmployees] = useState(employees);
  const [nations, setNations] = useState([]);
  const [filtering, setFiltering] = useState(false);
  const [filterKey, setFilterKey] = useState();
  const [filterValue, setFilterValue] = useState();

  useEffect(() => {
    setEmployees(employees)
  }, [employees])

  useEffect(() => {
    function createDropdownNations() {
      let nationRawResults = []
      employeeGroup.map(employee => {
          nationRawResults.push(employee.nat)
        });
      let nationSet = [...new Set(nationRawResults)];
      setNations(nationSet)
    }

    createDropdownNations();
  }, []);

  const genderExpressions = [ {"Women" : "female"}, {"Men" : "male"}, {"Other/Unaffiliated" : "other"} ]

  const filterByNation = (value) => {
    setFilterKey("nat")
    setFilterValue(value);
    setFiltering(true);
  }

  const filterByGender = (value) => {
    let gender = value[0]
    setFilterKey("gender")
    setFilterValue(gender);
    setFiltering(true);
  }

  return (
    <div className="sort-employees">
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='sort' />
            Sort
        </Header>
      </Divider>
      <Menu text>
        <Menu.Item header>Sort By</Menu.Item>
          <Dropdown text='Nationality' pointing className='link item'>
            <Dropdown.Menu>
            {nations.map((nation, index) => {
              return (
                <Dropdown.Item key={index} onClick={()=>filterByNation(nation)}>{nation}</Dropdown.Item>
              );
              })
            }
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown text='Gender Identity' pointing className='link item'>
            <Dropdown.Menu>
              {genderExpressions.map((gender, index) => {
                return (<Dropdown.Item key={index} onClick={() => filterByGender(Object.values(gender))}>{Object.keys(gender)}</Dropdown.Item>);
                })
              }
            </Dropdown.Menu>
          </Dropdown>
      </Menu>
      <Card.Group>
        {!filtering ?
          employeeGroup.map((employee, index) => {
            return (
              <EmployeeCard
                employee={employee}
                key={index}
                index={index}
              />
            )
          }) :
          employeeGroup.map((employee, index) => {
            if (employee[filterKey] === filterValue) {
              return (
                <EmployeeCard
                  employee={employee}
                  key={index}
                  index={index}
                />
              )
            }
            if (filterKey === "dob.age") {
              <p>{employee[filterKey]}</p>
            }
          })
        }
      </Card.Group>
    </div>
  )
}

export default Sort
