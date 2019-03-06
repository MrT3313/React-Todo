// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import './Todo.css'



// functional component

function ToDoList (props) {
        const { myProps } = props;
        console.log(myProps)
        console.log(myProps.toDoDataArray[0])
        console.log(myProps.toDoDataArray[1])
        console.log(myProps.toDoDataArray[2])
        console.log(myProps.toDoDataArray[3])
    return (
        <div className='toDoList'>
            <p>{myProps.toDoDataArray[0]}</p>
            <p>{myProps.toDoDataArray[1]}</p>
            <p>{myProps.toDoDataArray[2]}</p>
            <p>{myProps.toDoDataArray[3]}</p>
        </div>
    )
}

export default ToDoList

