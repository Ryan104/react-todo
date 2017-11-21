import $ from 'jquery-ajax';

class TodoModel {
	static all(){ /* lets us use all() without instatiating the class */
		let request = $.ajax({
			url: 'https://super-crud.herokuapp.com/todos',
			method: 'GET'
		});
		return request;
	}
	static create(todo) {
	  let request = $.ajax({
	    url: "https://super-crud.herokuapp.com/todos",
	    method: 'POST',
	    data: todo
	  });
	  return request;
	}
	static delete(todo) {
	  let request = $.ajax({
	    url: `https://super-crud.herokuapp.com/todos/${todo._id}`,
	    method: 'DELETE'
	  });
	  return request;
	}
	static edit(todo) {
	  let request = $.ajax({
	    url: `https://super-crud.herokuapp.com/todos/${todo._id}`,
	    method: 'PUT',
	    data: todo
	  });
	  return request;
	}
}

export default TodoModel;