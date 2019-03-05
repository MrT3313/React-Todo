import React from 'react'

// -make FUNCTIONAL COMPONENT --> it only needs static text values

// -1- //
const AddTaskButton = props => {
    return (
        <button>Add Todo</button>
    )
}

// -2- //
const ClearCompletedButton = props => {
    return (
        <button>Clear Completed</button>
    )
}
// export default ClearCompletedButton

export { AddTaskButton, ClearCompletedButton}