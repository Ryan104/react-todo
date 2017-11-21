import React, { Component } from 'react'

class EditTodoForm extends Component {
	constructor(props){
		super(props)
		this.state = {
			edit: ''
		};
	}

	onChange(event){
		this.setState({
			edit: event.target.value
		});
	}

	submitForm(event){
		event.preventDefault();
		let editedTodo = this.props.todo;
		editedTodo.body = this.state.edit;
		this.props.onEditTodo(editedTodo);
		this.setState({edit: ''});
	}
	render(){
		return (
			<div className='editTodoForm'>
			  <form onSubmit={(event) => this.submitForm(event)}>
			    <input
			    	onChange={event => this.onChange(event)}
			      placeholder='Write updated todo here...'
			      type='text'
			      value={this.state.edit} />
			    <button type='submit'>Update Todo!</button>
			  </form>
			</div>
			)
	}
}

export default EditTodoForm;