import styles from '@/styles/TodoItem.module.scss';
import { useState } from 'react';

const TodoItem = ({ itemProp, setTodos }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  const handleChange = id => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) return {
        ...todo,
        completed: !todo.completed
      };
      return todo;
    }))
  }

  const handleDelete = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id ))
  }

  return (
    <li className={styles.item}>
      <div className={styles.content}>
        <input 
        type="checkbox"
        checked={itemProp.completed}
        onChange={() => handleChange(itemProp.id)}
        />
        <span style={itemProp.completed ? completedStyle : null}>
          {itemProp.title}
        </span>
        <button onClick={handleEditing}>Edit</button>
        <button onClick={() => handleDelete(itemProp.id)}>Delete</button>
      </div>
      <input 
        type='text'
        value={itemProp.title}
        className={styles.textInput}
      />
    </li>
  )
}

export default TodoItem;