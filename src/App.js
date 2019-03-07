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
      completed: false,
    }
    this.addButtonHandler = this.addButtonHandler.bind(this)
  }

  inputChangeHandler = event => {
    console.log(event.target.name)
    console.log(event.target.value)

    this.setState({[event.target.name]: event.target.value})
  }

  addButtonHandler = event => {
    event.preventDefault() 
    
  }

  clearButtonHandler() {

  }

  toggleItem() {

  }

  render() {
    return (
      <div className='container-app'>
        {/* pass STATE as PROPS into ToDoList  */}
          <ToDoList 
            dataArray={this.state.toDoDataArray}
            toggleItem={this.toggleItem}
          />
        {/* displayForm */}
          <Form 
            task={this.state.task}
            item={this.state.id}
            inputChangeHandler={this.inputChangeHandler}
            clearButtonHandler={this.clearButtonHandler}
          />
      </div>
    );
  }


  // ADD HANDLERs for BOTH buttons INSIDE the <App />

}
export default App;
 


