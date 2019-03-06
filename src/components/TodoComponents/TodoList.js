// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import './Todo.css'

// import dataArray from ToDo.js

class ToDoList extends React.Component {
    constructor() {
        super()

        this.state = {
            toDoArray:[] // is the display that is changing       
        }
    }

    render () {
        return (
            <div className='toDoList'>
                <ul>
                    {/* Dynamic Fill */}
                </ul>
            </div>
        )
    }
}

export default ToDoList

