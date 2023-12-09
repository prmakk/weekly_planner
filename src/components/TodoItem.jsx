import React from 'react'

const TodoItem = ({todo, removeTodo, changeTodo, isCompleted}) => {
  return (
    <div className='todo'>
        <div className={isCompleted ? 'todo__item _done' : 'todo__item'} onClick={() => changeTodo(todo.id)} >
            <p key={todo.id}>{todo.body}</p>
        </div>
        <div className="todo__actions">
            <button className='del' onClick={() => removeTodo(todo.id)}>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/8254b4/filled-trash.png" alt="filled-trash"/>
            </button>
        </div>
    </div>
  )
}

export default TodoItem