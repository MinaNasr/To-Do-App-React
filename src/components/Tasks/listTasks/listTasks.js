import React, { Component } from 'react';
import './listTasks.css';
import CheckBox from '../../shared/CheckBox/CheckBox'
export default class ListTasks extends Component {



    render() {
        const { tasks } = this.props;
        const taskList = tasks.length ? (
            tasks.map(task => {
                return (


                    <
                    div className = "post card"
                    key = { task.id } >
                    <
                    div className = "task-container" >
                    <
                    CheckBox handleCheck = {
                        (task, e) => this.props.handleCheck(task, e) }
                    task = { task }
                    /> <
                    div className = "card-content" >
                    <
                    p > { task.title } < /p> <
                    /div> <
                    /div> <
                    /div>

                )
            })
        ) : (
            // <div>no tasks yet</div>
            <
            div className = "preloader-wrapper big active" >
            <
            div className = "spinner-layer spinner-green-only" >
            <
            div className = "circle-clipper left" >
            <
            div className = "circle" > < /div> <
            /div><div className="gap-patch"> <
            div className = "circle" > < /div> <
            /div><div className="circle-clipper right"> <
            div className = "circle" > < /div> <
            /div> <
            /div> <
            /div>
        )
        return ( <
            div className = "tasks" >
            <
            h2 > Your Task List < /h2> { taskList } <
            /div>

        )
    }

}