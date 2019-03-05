// NOTES
  // -ALL application data is stored HERE
  // -ALL handler functions are stored HERE
// -- -- -- // 
// -- IMPORTS -- //
// import React
  import React from 'react';
// import CSS
  import './components/TodoComponents/Todo.css'
// import Components
  import ToDoList from './components/TodoComponents/TodoList'
  import Form from './components/TodoComponents/TodoForm'
  // -- -- -- // 



// -- CLASS COMPONENT -- //
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
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
