import React, { Component } from 'react';

export default class TaskList extends Component {
    constructor(props){
        super(props)
        this.state = {
            itemNumber: ''
        }
    }

    markForRemoval() {
        this.setState({toBeRemoved: true})
        console.log(this.state.itemNumber)
    }

    render() {
        return(
            <>
                {this.props.taskList.map((t, index) => {
                    return(
                        <p>
                        <label htmlFor="checkbox">
                            {t}&nbsp;
                            <input name="checkbox" value={index} type="checkbox" onClick={(e) => {
                                this.setState({ itemNumber: e.currentTarget.value})
                                this.markForRemoval()
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