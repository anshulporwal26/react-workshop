import React from 'react'

const DisplayTodos = ({ todos, editTodo, deleteTodo }) => {
  // Functional component
  return (
    <div>
    <h1>Your todos</h1>
    {
      todos.length === 0 ?
      <p>You don't have anything to do, add from above!</p>
      :
      <ol>
      {
        todos.map(todo => {
          return (
          <div key={todo.id} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '32px' }}>
            <li>{todo.name}</li>
            <button onClick={() => editTodo(todo.id)} style={{ marginLeft: '16px' }}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '16px' }}>Delete</button>
          </div>
          )
        })
      }
    </ol>
    }
    </div>
  )
}

export default DisplayTodos