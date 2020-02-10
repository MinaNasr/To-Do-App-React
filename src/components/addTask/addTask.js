import React from 'react';
import './addTask.css'
export default class AddTask extends React.Component {

    handleAddTask = (e) => {
        e.preventDefault();
        console.log(e)
    }
    handleInputChange = (e) => {
        console.log(e)
        console.log(e.target.value)
    }
    render() {
        return (
            <div className="add-task">
                <h2>Add Task Here</h2>
                <form onSubmit={this.handleAddTask}>
                    <div className="task-form">
                        <div className="">
                            <input name="taskInput" onChange={this.handleInputChange} placeholer="add task" />
                        </div>
                        <div className="">
                            <button type="submit" >Add</button>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}