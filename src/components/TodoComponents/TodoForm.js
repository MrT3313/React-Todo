import React from 'react';


// import buttons
import { AddTaskButton, ClearCompletedButton} from './buttons'

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