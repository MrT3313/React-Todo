// -*- Imports -*- //
import React, {Component} from 'react'
import styled from 'styled-components'

// -*- Components -*- //

// -*- Styled Components -*- //
const ToDo_Form_Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    min-height: 25px; 
    margin: 10px;
    padding: 10px;

    border: 1px solid purple
`;

const Inputs_Container = styled.form`
    display: flex;
    flex-direction: column;

    width: 90%;
    margin-bottom: 10px;

    border: 1px solid orange;
`;

const Button_Container = styled.button`
    display: flex;
    width: 25%;


    border: 1px solid greed;
`;

class ToDoList extends Component {
    state = {
        title: '',
        description: '',
    }

    inputChangeHandler = e => {
        console.log('inside change handler')
        // -- * -- //
        this.setState({ [e.target.name]: e.target.value })
    }

    submit = e => {
        e.preventDefault()
        console.log('inside submit')
        // -- * -- //
        this.props.addToDo(this.state)
    }


    render() {
        // console.log('this.props', this.props)
        // -- * -- //
        return (
            <ToDo_Form_Container>
                <Inputs_Container
                    onSubmit={this.submit}
                >
                    <input
                        type='text'
                        name='title'
                        placeholder='Title of Task'
                        onChange={this.inputChangeHandler}
                        value={this.state.title}
                    ></input>
                    <textarea
                        type='text'
                        name='description'
                        placeholder='taskDescription'
                        onChange={this.inputChangeHandler}
                        value={this.state.description}
                    ></textarea>
                    <Button_Container
                        id='addToDo_button'
                        type='submit'
                    >Add New ToDo</Button_Container>
                </Inputs_Container>
            </ToDo_Form_Container>
        )
    }
}

export default ToDoList 