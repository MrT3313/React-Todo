// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

// -*- Imports -*- //
import React, {Component} from 'react'
import styled from 'styled-components'

// -*- Components -*- //
import ToDo from './Todo.js'

// -*- Styled Components -*- //
const ToDoList_container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 10px;

    min-height: 50px;
    border: 1px solid red
`;

class ToDoList extends Component {

    render() {
        console.log('-*- <ToDoList /> props -*- ',this.props.appState)
        // -- * -- //
        return (
            <>
                <ToDoList_container>
                    {this.props.appState.dataArray.map((item, key) => {
                        return <ToDo item={item} key={key}/>
                    })}
                </ToDoList_container>
            </>
        )
    }
}

export default ToDoList