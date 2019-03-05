// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import '../TodoComponents/Todo.css'

class ToDoList extends React.Component {
    constructor() {
        super()

        this.state = {
            
        }
    }
    render () {
        return (
            <div className='toDoList'>
                <p>1</p>
                <p>2</p>
            </div>
        )
    }
}
export default ToDoList
