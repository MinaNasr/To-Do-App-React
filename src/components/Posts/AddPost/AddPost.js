import React from 'react';
import './AddPost.css';
import Axios from 'axios'
import LaddaButton, { XS, ZOOM_IN } from 'react-ladda';
export default class AddPost extends React.Component {

    state = {
        title: '',
        body: '',
        loading: false,
        error: 'false'
    }

    handleAddPost = (e) => {
        e.preventDefault();
        let payload = {
            title: this.refs.postTitle.value,
            body:  this.refs.PostBody.value,
            id: Date.now()
        }
        if(payload.title && payload.body){
            this.setState({
                loading: true
            })
            Axios.post('https://jsonplaceholder.typicode.com/posts',payload).then(
                res=>{
                    this.setState({
                        title: '',
                        body: '',
                        error: false,
                        loading: false
                    })
                }
            )
        }
    }
    handleInputTitleChange = (e) => {
        this.setState({
            title:  this.refs.postTitle.value
        })
    }

    handleTextareaChange = (e)=>{
        this.setState({
            body: this.refs.PostBody.value
        })
    }

    render() {

        const message = !this.state.error ? 
        (
            <div>
               
               <div className="alert">
                    <span className="closebtn" onClick={(e)=>e.target.parentElement.style.display='none'}>&times;</span> 
                 <strong>Success!</strong> The Post has been added Successfully
                </div>

            </div>
        ):
        (
            <div>
               {/* <h3>error happened</h3>  */}
            </div>
        )
        return (
            <div className="add-post">
                <h2>Add Post Here</h2>
                <form onSubmit={this.handleAddPost}>
                    <div className="post-form">
                        <div className="row">
                            <div className="input-field col s12">
                                    <input className="col s8" name="postInput" ref="postTitle" 
                                    onChange={this.handleInputTitleChange} 
                                    value={this.state.title}
                                    placeholer="add post" />
                                    <label htmlFor="title">Title</label>
                                    <div className="col s4">
                                        <LaddaButton type="submit" 
                                        loading={this.state.loading} 
                                        data-size={XS}
                                        data-style={ZOOM_IN}
                                      
                                        className="waves-effect waves-light btn-large" >Add</LaddaButton>
                                    </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea ref="PostBody" id="textarea2" 
                                onChange={this.handleTextareaChange}
                                value={this.state.body} 
                                className="materialize-textarea" data-length="120"></textarea>
                                <label htmlFor="post body">Post Body</label>
                            </div>
                        </div>
                    </div>
                </form>

                <div>
                    {message}
                </div>
            </div>
        )
    }
}