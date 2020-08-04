import React from "react";

const TodoForm = (props) => {
   // Functional component
  const { submitForm, handleTodoChange, todo, isEditing } = props
  return (
      <div>
        <form onSubmit={submitForm}>
        <input 
          type="text" 
          placeholder="Enter what you want to do" 
          value={todo} 
          onChange={handleTodoChange} 
        />
        <button type="submit">
          {
            isEditing ?
              "Edit To do"
            : "Save To do"
          }
          </button>
        </form>
      </div>
    )
}

export default TodoForm