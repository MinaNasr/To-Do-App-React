import React , {Component} from 'react';
import axios from 'axios';
import Pagination from '../shared/Pagination/Pagination';
import ListPosts from '../ListPosts/ListPosts';
export default class Posts extends Component {
    state = {
        posts: [],
        currentPage: 1,
        postsPerPage: 10
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
            console.log('res: ', res);
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
        const lastPostIndex = this.state.currentPage * this.state.postsPerPage;
        const firstPostIndex = lastPostIndex - this.state.postsPerPage;
        const currentPosts = this.state.posts.slice(firstPostIndex,lastPostIndex)
        return(
            <div>
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