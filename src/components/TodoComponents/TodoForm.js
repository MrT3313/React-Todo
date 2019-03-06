import React from 'react';

class Form extends React.Component {
    constructor () {
        super();
    }
    render() {
        return (
            <div className='toDoForm'>
                <input type="text" name="formName"></input>
                <button>Add Todo</button>
                <button>Clear Completed</button>
            </div>
        )
    }
}
export default Form