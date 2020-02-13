import React, { Component } from 'react';
import ListTasks from './listTasks/listTasks';
import axios from 'axios';
import Pagination from '../shared/Pagination/Pagination';
export default class Tasks extends Component {
    state = {
        tasks: [],
        currentPage: 1,
        tasksPerPage: 10
    }
    componentDidMount() {
        setTimeout(() => {

            axios.get('https://jsonplaceholder.typicode.com/todos/').then(
                res => {
                    if (res.data.length) {
                        this.setState({
                            tasks: res.data
                        })
                    }
                }
            )
        }, 2000)
    }

    handleCheck = (task, e) => {
        const newTasks = this.state.tasks.slice();
        const index = this.state.tasks.findIndex(item => {
            return item.id == task.id
        })

        newTasks[index].completed = e.target.checked ? true : false
        this.setState({
            tasks: newTasks
        })
        axios.post('https://jsonplaceholder.typicode.com/todos/', this.state.tasks).then(
            data => {
                console.log('save: ', data)
            }
        )
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    nextPage = (Pages) => {
        if (this.state.currentPage < Pages) {
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }

    previousPage = () => {
        if (this.state.currentPage > 1) {
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }


    render() {
        const lastTaskIndex = this.state.currentPage * this.state.tasksPerPage;
        const firstTaskIndex = lastTaskIndex - this.state.tasksPerPage;
        const currentTasks = this.state.tasks.slice(firstTaskIndex, lastTaskIndex)
        return (
            <div >
                < ListTasks tasks={currentTasks}
                    handleCheck={this.handleCheck} />
                <Pagination itemsPerPage={this.state.tasksPerPage}
                    totalItems={this.state.tasks.length}
                    paginate={this.paginate}
                    nextPage={this.nextPage}
                    previousPage={this.previousPage}
                    currentPage={this.state.currentPage} />
            </div >
        )
    }
}