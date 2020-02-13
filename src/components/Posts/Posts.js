import React , {Component} from 'react';
import axios from 'axios';
import Pagination from '../shared/Pagination/Pagination';
import ListPosts from './ListPosts/ListPosts';
import AddPost from './AddPost/AddPost';
export default class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 10
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            if (res.data.length) {
                this.setState({
                    posts: res.data
                })
            }
        })
    }
    paginate = (pageNumber)=>{
        this.setState({
            currentPage: pageNumber
        })
    }

    nextPage = (Pages)=>{
        if(this.state.currentPage < Pages){
            this.setState({
                currentPage: this.state.currentPage + 1
            })
        }
    }

    previousPage = ()=>{
        if(this.state.currentPage > 1){
            this.setState({
                currentPage: this.state.currentPage - 1
            })
        }
    }
    render(){
        const lastPostIndex = this.state.currentPage * this.state.postsPerPage;
        const firstPostIndex = lastPostIndex - this.state.postsPerPage;
        const currentPosts = this.state.posts.slice(firstPostIndex,lastPostIndex)
        return(
            <div>
                <AddPost/>
                <h2>Your posts</h2>
                <ListPosts posts = {currentPosts}/>
                <Pagination itemsPerPage={this.state.postsPerPage} 
                            totalItems={this.state.posts.length} 
                            paginate={this.paginate}
                            nextPage={this.nextPage}
                            previousPage={this.previousPage}
                            currentPage={this.state.currentPage}/>
            </div>
        )
    }
}