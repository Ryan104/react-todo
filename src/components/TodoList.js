import React, { Component } from 'react';
import Todo from '../components/Todo';

class TodoList extends Component {
	render() {
		let todos = this.props.todos.map(todo => {
			return <Todo key={todo._id} todo={todo} onEditTodo={this.props.onEditTodo} onDeleteTodo={this.props.onDeleteTodo} />
		});
		return(
			<div className="todos">
				{todos}
			</div>
		)
	}
}

export default TodoList;