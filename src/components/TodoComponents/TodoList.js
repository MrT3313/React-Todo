// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// -*- Imports -*- //
import React, {Component} from 'react'
import styled from 'styled-components'

// -*- Components -*- //

// -*- Styled Components -*- //
const ToDoList_container = styled.div`
    display: flex;
    margin: 10px;

    min-height: 50px;
    border: 1px solid red
`;



class ToDoList extends Component {
    constructor() {
        super()
        
    }

    render() {
        return (
            <>
                <ToDoList_container>

                </ToDoList_container>
            </>
        )
    }
}

export default ToDoList