import React, { Component } from 'react';

export default class TaskList extends Component {
    constructor(){
        super()
        this.state = {
            tasks: ["Reconcile Bank Account", "Wash Dishes", "Finish Homework"],
            newTask: '',
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
        console.log(this.state.itemNumber)
        this.state.tasks.splice(this.state.itemNumber, 1, )
    }    

    render() {
        return(
            <>
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
                {this.state.tasks.map((t, index) => {
                    return(
                        <p key={index}>
                        <label htmlFor="checkbox">
                            {t}&nbsp;
                            <input name="checkbox" value={index} type="checkbox" onChange={(e) => {
                                this.setState({ itemNumber: e.currentTarget.index})
                                this.markComplete(this.state.itemNumber)
                            }} />
                        </label>
                        <br />
                        </p>
                    )
                })}
            </>
        )
    }
}