import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.todoadd(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return ( <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            label > Click to Add new todo: < /label> <
            input type = "text"
            onChange = { this.handleChange }
            value = { this.state.content }
            /> < /
            form > <
            /div>
        )
    }
}

export default AddTodo