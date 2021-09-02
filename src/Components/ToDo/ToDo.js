import React, {Component} from 'react';
import {Container} from 'reactstrap';
import TaskList from './TaskList';

class ToDo extends Component {
    constructor(){
      super()
      this.state = {
        tasks: ["Reconcile Bank Account", "Wash Dishes", "Finish Homework"],
        newTask: '',
        toBeRemoved: false,
        itemNumber: ''
      }
    }

    handleSubmit() {
      this.setState({ tasks: [...this.state.tasks, this.state.newTask]})
      console.log(this.state.tasks);
    }

    clearInput() {
      this.setState.newTask = ''
    }

    markComplete() {
      this.state.tasks.splice(this.state.itemNumber, 1, )
    }
  
  render() {
    return(
      <Container className="App">
        <form onSubmit={(e) => {
          e.preventDefault()
          this.handleSubmit()
          this.clearInput()
        }}>
          <label htmlFor="newTask"><b>Add A New Task:</b></label>
          <br />
          <input placeholder="New Task" name="newTask" type="text" maxLength="200" onChange={(e) => {this.setState({newTask: e.target.value})}} />
          <br />
          <br />
          <button type="submit">Add My Task</button>
        </form>
        <br />
        <TaskList taskList={this.state.tasks} toBeRemoved={this.state.toBeRemoved} itemNumber={this.state.itemNumber} />
      <br />
        <h1 className="App-intro">
          In this challenge your goal is to create a to do list: 
        </h1>
        <hr />
        <ul>
          <li>
            ability to accept a task from a user
          </li>
          {/* Will need an input field and button to add new task to state */}
          <li>
              ability to add this to the state
          </li>
          {/* Will want to add to state as an array of tasks so +e.target.value is the correct way I believe */}
          <li>
              ability to display all of the tasks
          </li>
          {/* Review the putting-it-together for some pointers (just remember that is typescript! not everything will work here) */}
          <li>
              ability to evaluated if a task was completed and update the state
          </li>
          {/* Not sure what they are asking here...maybe a checkbox or something? Maybe another button to mark 'done'? */}
        </ul>
        <hr />
      </Container>
    );

  }
};

export default ToDo