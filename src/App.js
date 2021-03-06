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
      dataArray: staticDebugArray, // passed to TodoList
      task: '', // passed to TodoForm
      }
  }

// -- METHODS -- //
// -- addTodo -- //
  addTodo = event => {
    event.preventDefault() 

    // CREATE NEW toDo ITEM
    this.setState( prevState => {
      return {
        dataArray: [...prevState.dataArray, {
          value: prevState.task,
          id: Date.now()
          }
        ], task: ''
      }
    })



    console.log('hello from inside addTodo')
  }

// -- toggleTodo -- //
  toggleTodo() {
    console.log('hello from inside toggleTodo')
  }
// -- changeHandler -- //
  changeHandler = event => {
    console.log('hello from inside changeHandler')
    this.setState({ [event.target.name]: event.target.value })
  }
// -- clearCompleted -- //
  clearCompleted = event => {
    event.preventDefault() 
    console.log('hello from inside clearCompleted')
  }


//   // -- RENDER -- //
//   // -- -- -- -- // 
  render() {
    return (
      <div className='container-app'>          
        <ToDoForm 
          // from STATE
            newTask={this.state.task}
          // METHODS
            changeHandler={this.changeHandler}  
            addTodo={this.addTodo}
            clearCompleted={this.clearCompleted}

        />
        <ToDoList 
          // from STATE
            dataArray={this.state.dataArray}
          // METHODS
            toggleTodo={this.toggleTodo}
        />
      </div>
    );
  }


//   // ADD HANDLERs for BOTH buttons INSIDE the <App />

}
export default App;
 


