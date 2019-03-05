import React from 'react';
import '../TodoComponents/Todo.css';

// import button
import AddTaskButton from './buttons'
import ClearCompletedButton from './buttons'

// EXAMPLE: Function Component
// const form = props => {

//     return (
//         <>
//             render this text
//         </>
//     )
// }

// EXAMPLE: Class Component 
class Form extends React.Component {
    constructor () {
        super();
    }
    render() {
        return (
            <div>
                <input type="text" name="formName"></input>
                <AddTaskButton />
                <ClearCompletedButton />
            </div>
        )
    }
}

export default Form