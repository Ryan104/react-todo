import React, {Component} from 'react';
import TodoModel from '../models/Todo';
import TodoList from '../components/TodoList';
import CreateTodoForm from '../components/CreateTodoForm';

class TodosContainer extends Component {
	constructor(props){
		super(props);
		this.state = {
			todos: []
		};
	}

	componentDidMount(){
		TodoModel.all().then(res => {
			this.setState({todos: res.todos});
		});
	}

	createTodo(todo){
		console.log('creating ' + todo);
		TodoModel.create(todo).then(res => {
			/* update state */
			let todos = this.state.todos;
			todos.push(res);
			this.setState({todos: todos});
		});
	}

	deleteTodo(todo){
		console.log('deleting ' + todo.body);
		TodoModel.delete(todo).then(res => {
			console.log('DELETED!');
			let todos = this.state.todos.filter(todo => {
				return todo._id !== res._id;
			});
			this.setState({todos: todos});
		});
	}

	editTodo(todo){
		console.log('editing ' + todo.body);
		TodoModel.edit(todo).then(res => {
			console.log('edited ' + res.body);
			let todos = this.state.todos.map(t => {
				if (t._id === res.id){
					return res;
				} else {
					return t;
				}
			});
			this.setState({
				todos: todos
			});
		});

	}

  render(){
    return (
      <div className='todos-container'>
        <h2>This is the todos container</h2>
        <CreateTodoForm createTodo={this.createTodo.bind(this)} />
        <TodoList todos={this.state.todos} onEditTodo={this.editTodo.bind(this)} onDeleteTodo={this.deleteTodo.bind(this)} />
      </div>
    )
  }
}

export default TodosContainer