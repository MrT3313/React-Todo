// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import './Todo.css'

import Todo from './Todo'

// functional component

function ToDoList (props) {
        const { myProps } = props;
        console.log(myProps)
        // SET VARIABLES
        const propsArray = myProps.toDoDataArray
        console.log(propsArray)
        const propsLength = myProps.toDoDataArray.length
        console.log(propsLength)

        console.log(propsArray[0])
        // -- //

        {/* toDoDataArray Length */}
        let arrayLength = myProps.toDoDataArray.length

    return (
        <div className='toDoList'>
            {/* MAP THE ARRAY */}
            


            {myProps.toDoDataArray.map(item => (
                <Todo myProps={item}/>    
            ))}
        </div>

    )
}

export default ToDoList

