// import React
  import React from 'react';
  import './components/TodoComponents/Todo.css'
  import ToDoList from './components/TodoComponents/TodoList'
  import Form from './components/TodoComponents/TodoForm'
  
// -- -- -- // 

// -- toDoArray -- //
const toDoArray = []
console.log(toDoArray)
// -- -- -- // 

// -- CLASS COMPONENT -- //
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      task: '',
      id: undefined,
      completed: false
    }
  }
  render() {
    return (
      <div className='container-app'>
        <ToDoList />
        <Form />
      </div>
    );
  }
}
export default App;
// -- -- -- // 


