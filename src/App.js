// import React
  import React from 'react';
  import './components/TodoComponents/Todo.css'
  //--//
  import ToDoList from './components/TodoComponents/TodoList'
  import ToDoForm from './components/TodoComponents/TodoForm'

// -- -- -- //  

const staticDebugArray = [
  {
    value: 'first item in array',
    id: 1
  },
  {
    value: 'second item yo',
    id: 2
  },
  {
    value: 'third item placeholder',
    id: 3
  },
  {
    value: 'yo this be the forth',
    id: 4
  }
  
]


// // -- CLASS COMPONENT -- //
class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {  
      toDoDataArray: staticDebugArray,
      task: '',
      }
  }

// -- METHODS -- //

// -- addTodo -- //
// -- toggleTodo -- //
// -- changeHandler -- //
// -- clearCompleted -- //


//   // -- RENDER -- //
//   // -- -- -- -- // 
  render() {
    return (
      <div className='container-app'>          
        <ToDoForm />
        {/* <ToDoList /> */}
      </div>
    );
  }


//   // ADD HANDLERs for BOTH buttons INSIDE the <App />

}
export default App;
 


