import React from 'react';

function Form (props) {

    return (
        <form className='toDoForm'>
            <input type="text" name="formName"></input>
            <button >Add Todo</button>
            <button >Clear Completed</button>
        </form>
    )
}

export default Form