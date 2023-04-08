import styles from '@/styles/TodoItem.module.scss';
import { useState } from 'react';

const TodoItem = ({ itemProp, setTodos }) => {
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  }

  const [editing, setEditing] = useState(false);

  let viewMode = {};
  let editMode = {};
  editing ? viewMode.display = 'none': editMode.display = 'none';

  const handleEditing = () => setEditing(true);

  // Handle input for editing existing todo
  const handleInputChange = e => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === itemProp.id) {
        todo.title = e.target.value
      }
      return todo;
    }))
  }

  // Handle for adding a new todo
  const handleChange = id => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) return {
        ...todo,
        completed: !todo.completed
      };
      return todo;
    }))
  }

  // Handle for deleting todo
  const handleDelete = id => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id ))
  }

  // Handle for pressing Enter after editing a todo
  const handleUpdatedDone = e => {
    if (e.key === 'Enter') setEditing(false);
  }

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
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
        style={editMode}
        onKeyDown={handleUpdatedDone}
        onChange={handleInputChange}
      />
    </li>
  )
}

export default TodoItem;