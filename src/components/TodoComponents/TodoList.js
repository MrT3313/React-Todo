// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import './Todo.css'
class ToDoList extends React.Component {
    constructor() {
        super()

        this.state = {
            
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

