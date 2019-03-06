import React from 'react';

class Form extends React.Component {
    constructor () {
        super();
    }
    render() {
        return (
            <div className='toDoForm'>
                <input type="text" name="formName"></input>
                <button onClick={this.addBtnFunction}>Add Todo</button>
                <button onClick={this.clearBtnFunction}>Clear Completed</button>
            </div>
        )
    }

    addBtnFunction() {
        console.log('hey from btn 1')
    }
    clearBtnFunction() {
        console.log('hey from btn 2')
    }
}
export default Form