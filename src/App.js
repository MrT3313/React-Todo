// import React
  import React from 'react';
  import './components/TodoComponents/Todo.css'
  //--//
  import ToDoList from './components/TodoComponents/TodoList'
  import Form from './components/TodoComponents/TodoForm'

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
// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor() {
//     super()
//     this.state = {
//       toDoDataArray: staticDebugArray,
//       task: '',
//       id: undefined,
//       completed: false,
//     }
//   }

//   // -- METHODS -- //
//   // -- -- -- -- // 



//   // -- RENDER -- //
//   // -- -- -- -- // 
//   render() {
//     return (
//       <div className='container-app'>
//         {/* pass STATE as PROPS into ToDoList  */}
//           <ToDoList 
//             dataArray={this.state.toDoDataArray}
//             // toggleItem={this.toggleItem}
//           />
//         {/* displayForm */}
//           <Form 
//             task={this.state.task}
//             id={this.state.id}
//             inputChangeHandler={this.inputChangeHandler}
//             clearButtonHandler={this.clearButtonHandler}
//           />
//       </div>
//     );
//   }


//   // ADD HANDLERs for BOTH buttons INSIDE the <App />

// }
export default App;
 


