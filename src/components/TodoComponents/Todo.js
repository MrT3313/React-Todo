import React from 'react';
import './Todo.css'
{/* <Todo /> is a component that takes in the 
todo data and displays the task to the screen. */}

function Todo (props) {
    console.log('WHAT THE FUCK')
    return (
        <div className='listItem'>
            {console.log(props)}
            <h2>hello from TODO</h2>
        </div>
    )
}
export default Todo




