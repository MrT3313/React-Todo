import React from 'react';


function ToDoForm (props) {
    // console.log(props)
    return (
        <form className='toDoForm'>
            <input
                placeholder = 'words go here'
                onChange={props.toggleTodo}
            ></input>
            <button 
                name='addBtn' 
                type='submit'
                onClick={props.addTodo}
            >
                Add Todo
            </button>
            <button 
                name='clrBtn'
                type='submit'
                onClick={props.clearCompleted}
            >
                Clear Completed
            </button>
            
            {/* <input 
                type="text" 
                name="formName" 
                placeholder='Enter Item Here'
                // onChange={this.props.inputChangeHandler}
                
            >

                
            </input>
            <button name='addBtn'>Add Todo</button>
            <button name='clrBtn'>Clear Completed</button> */}
        </form>
    )
}


export default ToDoForm

