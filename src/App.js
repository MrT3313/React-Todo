import React from 'react';

// import form
import Form from './components/TodoComponents/TodoForm'

// NOTES
  // -ALL application data is stored HERE
  // -ALL handler functions are stored HERE


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div className='container-app'>
        <Form />
      </div>
    );
  }
}

export default App;
