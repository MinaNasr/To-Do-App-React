import React , {Component} from 'react';
import AddTask from '../addTask/addTask';
import ListTasks from '../listTasks/listTasks';
import axios from 'axios';
import Pagination from '../shared/Pagination/Pagination';
export default class Tasks extends Component {
    state = {
        tasks: [],
        currentPage: 1,
        tasksPerPage: 10
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/').then(
            res => {
                console.log('data: ', res)
                if (res.data.length) {
                    this.setState({
                        tasks: res.data
                    })
                }
                console.log(this.state)
            }
        )
    }

    handleCheck = (task,e) =>{
        console.log('helloksjksjask: ', e.target.checked)
        console.log('helloksjksjask: ', task)
        // const myTask = this.state.tasks.filter(item=>{
        //     return task.id == item.id
        // })
        const newTasks = this.state.tasks.slice();
        const index = this.state.tasks.findIndex(item=>{
            return item.id == task.id
        })

        newTasks[index].completed = e.target.checked ? true : false
        this.setState({
            tasks: newTasks
        })
        axios.post('https://jsonplaceholder.typicode.com/todos/',this.state.tasks).then(
            data=>{
                console.log('save: ', data)
            }
        )
        console.log('index: ', index)
        console.log('index: ', this.state.tasks[index])
        // const newTask = myTask[0].completed ? false : true;
        // this.state.tasks.splice(this.state.tasks.findIndex((item) => {
        //     return item.id == task.id;
        //   }), 1);

        //   this.setState({
        //       tasks: [...this.state.tasks, newTask]
        //   })
    //    console.log('state: ', newTask)
    }

    paginate = (pageNumber)=>{
        this.setState({
            currentPage: pageNumber
        })
    }

    nextPage = (Pages)=>{
        console.log('pages: ', Pages)
        console.log('pages: ', this.state.currentPage)
        if(this.state.currentPage < Pages){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
        console.log('stattttt: ' ,this.state)
    }

    previousPage = ()=>{
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }


    render(){
        const lastTaskIndex = this.state.currentPage * this.state.tasksPerPage;
        const firstTaskIndex = lastTaskIndex - this.state.tasksPerPage;
        const currentTasks = this.state.tasks.slice(firstTaskIndex,lastTaskIndex)
        return(
            <div>
                <AddTask/>
                <ListTasks tasks={currentTasks} handleCheck={this.handleCheck}/>
                <Pagination itemsPerPage={this.state.tasksPerPage} 
                            totalItems={this.state.tasks.length} 
                            paginate={this.paginate}
                            nextPage={this.nextPage}
                            previousPage={this.previousPage}
                            currentPage={this.state.currentPage}
                 />
            </div>
        )
    }
}