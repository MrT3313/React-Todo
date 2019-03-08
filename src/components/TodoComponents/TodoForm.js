import React from 'react';


function ToDoForm (props) {
    // console.log(props)
    return (
        <form className='toDoForm'>
            <input
                placeholder = 'words go here'
            >
            
            
            </input>
            
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

