import React from 'react';
import '../TodoComponents/Todo.css';

// import buttons
import { AddTaskButton, ClearCompletedButton} from './buttons'


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
            <div className='toDoForm'>
                <input type="text" name="formName"></input>
                <AddTaskButton />
                <ClearCompletedButton />
            </div>
        )
    }
}

export default Form