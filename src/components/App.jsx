import { Component } from "react"
import { TodoList } from "./TodoList/TodoList";
import initialTodos from '../todo.json'
import { Container } from "./App.styled";

export class App extends Component {
  state={
    todos: initialTodos,
    filter: '',
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

  render() {
    return (
      <Container>
        <div>
          <p>Total: 0</p>
          <p>Completed: 0</p>
        </div>
        <TodoList todos={this.state.todos} onToggleCompleted={this.toggleCompleted} onDeleteTodo={this.deleteTodo}/>
      </Container>
    );
  }
};
