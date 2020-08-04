import React from "react";
import logo from "./logo.svg";
import "./App.css";
import TodoForm from './components/TodoForm'
import DisplayTodos from './components/DisplayTodos'

class App extends React.Component {
  
  // stateful component
  state = {
    todos: [],
    todo: "",
    isEditing: false,
    isEditingId: ""
  };

  handleTodoChange = event => {
    this.setState({
      todo: event.target.value
    })
  }

  submitForm = event => {
    event.preventDefault()
    if (this.state.isEditing) {
      const newTodos = this.state.todos.map(todo => {
        if (todo.id === this.state.isEditingId) {
          todo.name = this.state.todo
        }

        return todo
      })

      this.setState({
        todos: newTodos,
        todo: "",
        isEditing: false,
        isEditingId: ""
      })

    } else {
      const data = {
        id: this.state.todos.length + 1,
        name: this.state.todo
      }
      // this.setState({
      //   todos: [...this.state.todos, data]
      // })
      const currentTodos = this.state.todos
      currentTodos.push(data)
      this.setState({
        todos: currentTodos,
        todo: ""
      })
    }
  }

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({
      todos: newTodos
    }) 
  }

  editTodo = (id) => {
    const data = this.state.todos.find(todo => todo.id === id)
    this.setState({
      todo: data.name,
      isEditing: true,
      isEditingId: id
    })
  }                                              

  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <TodoForm 
          todo={this.state.todo} 
          handleTodoChange={this.handleTodoChange} 
          submitForm={this.submitForm} 
          isEditing={this.state.isEditing} 
        />
        <DisplayTodos todos={this.state.todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
      </div>
    );
  }
}

export default App;
