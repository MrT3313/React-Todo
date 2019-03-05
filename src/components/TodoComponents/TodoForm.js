import React from 'react';
import '../TodoComponents/Todo.css';


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
            <input type="text" name="formName"></input>
        )
    }
}

export default Form