// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import './Todo.css'

import Todo from './Todo'

// functional component

function ToDoList (props) {
        // const { dataArray } = props;
    return (
        <div className='toDoList'>
            


            {props.dataArray.map(item => (
                    <Todo 
                        key={item.id}    
                        item={item}
                        toggleTodo={props.toggleTodo}
                    />    
            ))}
        </div>
    )
}

export default ToDoList

