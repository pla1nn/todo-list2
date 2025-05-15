import { Component } from "react"
import { TodoList } from "./TodoList/TodoList";
import initialTodos from '../todo.json'
import { Container } from "./App.styled";
import { TodoEditor } from "./TodoEditor/TodoEditor";
import { nanoid } from "nanoid";
import { Filter } from "./Filter/Filter";

export class App extends Component {
  state={
    todos: initialTodos,
    filter: '',
  }

  componentDidMount() {
    console.log('mounted');
    const todos = JSON.parse(localStorage.getItem('todos'))
    console.log(todos);

    if (todos) {
      this.setState({todos: todos})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updated');
    console.log(prevState);
    console.log(this.state);

    if (this.state.todos !== prevState.todos) {
      console.log('todos updated');
      localStorage.setItem('todos', JSON.stringify(this.state.todos))
    }
  }



  toggleCompleted = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    }))
  }

  deleteTodo = (todoId) => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId)
    }))
  }

  addTodo = (text) => {
    const todo = {
      id: nanoid(),
      text,
      completed: false,
    }

    this.setState(({todos}) => ({
      todos: [
        todo,
        ...todos
      ]
    }))
  }

  changeFilter = (e) => {
    this.setState({
			filter: e.currentTarget.value,
		})
  }

  getVisibleTodos = () => {
    const normalizedFilter = this.state.filter.toLowerCase();

    return this.state.todos.filter(todo => todo.text.toLowerCase().includes(normalizedFilter))
  }

  render() {
    return (
      <Container>
        <div>
          <p>Total: 0</p>
          <p>Completed: 0</p>
        </div>
        <TodoEditor onSubmit={this.addTodo}/>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <TodoList todos={this.getVisibleTodos()} onToggleCompleted={this.toggleCompleted} onDeleteTodo={this.deleteTodo} />
      </Container>
    );
  }
};
