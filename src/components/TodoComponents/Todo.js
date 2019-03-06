import React from 'react';
import './Todo.css'
{/* <Todo /> is a component that takes in the 
todo data and displays the task to the screen. */}

function Todo (props) {
    const { myProps } = props;
    return (
        <div className='listItem'>
            {console.log(myProps)}
            {myProps}
        </div>
    )
}
export default Todo




