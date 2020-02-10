import React from 'react'

const ListPosts = ({posts})=>{

    const postList = posts.length ? (
        posts.map(post=>{
            return(
                
                    <div className="col s12">
                    <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                        <span className="card-title">{post.title}</span>
                        <p>{post.body}</p>
                        </div>
                        {/* <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                        </div> */}
                    </div>
                    </div>
                
            )
        })
    ) : (
        <div>no posts yet</div>
    )
    return(
        <div className="row">
            {postList}
        </div>
    )
}

export default ListPosts;