import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, setTodos }) => {

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
        {' '}{itemProp.title}{' '}
        <button onClick={() => handleDelete(itemProp.id)}>✖</button>
      </div>
    </li>
  )
}

export default TodoItem;