import React, {Component} from 'react';
import {Container} from 'reactstrap';
import TaskList from './TaskList';

class ToDo extends Component {
      
  render() {
    return(
      <Container className="App">
        <br />
        <TaskList />
      <br />
        <h1 className="App-intro">
          In this challenge your goal is to create a to do list: 
        </h1>
        <hr />
        {/* <ul>
          <li>
            ability to accept a task from a user
          </li>
          {/* Will need an input field and button to add new task to state */}
          {/* <li>
              ability to add this to the state
          </li> */}
          {/* Will want to add to state as an array of tasks so +e.target.value is the correct way I believe */}
          {/* <li>
              ability to display all of the tasks
          </li> */}
          {/* Review the putting-it-together for some pointers (just remember that is typescript! not everything will work here) */}
          {/* <li>
              ability to evaluated if a task was completed and update the state
          </li> */}
          {/* Not sure what they are asking here...maybe a checkbox or something? Maybe another button to mark 'done'? */}
        {/* </ul> */}
        <hr />
      </Container>
    );

  }
};

export default ToDo