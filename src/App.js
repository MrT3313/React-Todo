// -*- Imports -*- //
import React from 'react';
import styled from 'styled-components'

// -*- Components -*- //
import To_Do_List from './components/TodoComponents/TodoList.js'


// -*- Debug Key -*- //
const key = {
  codeSegment: '-*-',
  functionCheck: '-x-'
}
console.log(
  'KEY: ',key
)

// -*- Styled Components -*- //
const App_container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  
  border: 1px solid black;
`;

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor () {
    super() 
    this.state = {
      dataArray: [],
    }
  }

  componentDidMount() {
    console.log('-*- component did mount -*-')
    console.log('-x- this.state -x-', this.state)
    // -- * -- //
  }
  
  render() {
    return (
      <App_container>
        <h2>THIS TODO APP IS EPIC</h2>
        <To_Do_List appState={this.state}/>
      </App_container>
    );
  }
}

export default App;
