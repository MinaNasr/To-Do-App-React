import React, { Component } from 'react';
import './listTasks.css';
import CheckBox from '../shared/CheckBox/CheckBox'
export default class ListTasks extends Component {

   
    
    render() {
        // console.log(this.props)
        // console.log(this.props.tasks)
        const { tasks } = this.props;
        const taskList = tasks.length ? (
            tasks.map(task => {
                return (
                    <div className="post card" key={task.id}>
                        <div className="task-container">
                            <CheckBox handleCheck={(task,e)=>this.props.handleCheck(task,e)} task={task}/>
                            <div className="card-content">
                                <p>{task.title}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        ) : (
                <div>no tasks yet</div>
            )
        return (
            <div className="tasks">
                {taskList}
            </div>

        )
    }

}
