import React from 'react';

const Pagination = ({ itemsPerPage, totalItems,paginate,nextPage,previousPage,currentPage }) => {

    let pageNumber = [];
    for (let i = 1; i < Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumber.push(i);
    }
    const Pages = pageNumber.length;

    return (
        <ul className="pagination">
            <li  onClick={()=>previousPage()} className=""><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            {pageNumber.map(number=>{
                return(
                    <li key={number} onClick={()=>paginate(number)} className={currentPage == number ? "active": ""}><a href="#!">{number}</a></li>  
                )
            })
            }
            <li onClick={()=>nextPage(Pages)} className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}

export default Pagination;