// -*- Imports -*- //
import React, {Component} from 'react'
import styled from 'styled-components'

// -*- Styled Components -*- //
const ToDo_container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80%;

    border: 1px dashed yellow;
`;

class ToDo extends Component {
    render() {
        console.log('-*- <ToDo /> props-*-', this.props)
        return (
            <ToDo_container>
                <h2>Title: {this.props.item.title}</h2>
                <h4>Category: {this.props.item.category}</h4>
                <h4>Description: {this.props.item.description}</h4>
            </ToDo_container>
        )
    }
}

export default ToDo