import React, { Component } from 'react';

class CreateTodoForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo: ''
		};
	}

	onChange(event){
		this.setState({todo: event.target.value});
	}

	onSubmit(event){
		event.preventDefault();
		this.props.createTodo({body: this.state.todo});
		this.setState({todo: ''});
	}

	render(){
		return (
			<div className='createForm todoForm'>
        <h2>Create Todo Here!</h2>
        <form onSubmit={event => this.onSubmit(event)}>
          <input
          	onChange={event => this.onChange(event)}
            placeholder='Write a todo here ...'
            type='text'
            value={this.state.todo} />
          <button type='submit'>Create Todo!</button>
        </form>
      </div>
		)
	}
}

export default CreateTodoForm;