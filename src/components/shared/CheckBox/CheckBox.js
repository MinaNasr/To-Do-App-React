import React from 'react'

const CheckBox = ({ handleCheck ,task}) => {
 
    return(
        <label>
            <input onChange={(e) => handleCheck(task, e)} type="checkbox" className="filled-in" checked={task.completed} />
            <span></span>
        </label>
    )
}

export default CheckBox;