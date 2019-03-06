// import React
  import React from 'react';
  import './components/TodoComponents/Todo.css'
  //--//
  import ToDoList from './components/TodoComponents/TodoList'
  import Form from './components/TodoComponents/TodoForm'

// -- -- -- //  

// -- CLASS COMPONENT -- //
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      toDoDataArray: [
        'first item in array',
        'second item yo',
        'third item placeholder',
        'yo this be the forth'
      ],
      task: '',
      id: undefined,
      completed: false
    }
  }


  addButtonHandler() {

  }
  clearButtonHandler() {

  }

  render() {
    return (
      <div className='container-app'>
        {/* pass STATE as PROPS into ToDoList  */}
          <ToDoList myProps={this.state}/>
        {/* displayForm */}
          <Form />
      </div>
    );
  }


  // ADD HANDLERs for BOTH buttons INSIDE the <App />

}
export default App;
 


